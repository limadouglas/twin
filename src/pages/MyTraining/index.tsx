import React, { useCallback, useEffect, useState } from 'react'
import { Alert, Button, PermissionsAndroid, Text, View} from 'react-native';
import XLSX from 'xlsx';
import { readFile, DownloadDirectoryPath } from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';
import { WeekContainer, WeekList, WeekListContainer, WeekName, WeekProps } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


const MyTraining: React.FC = () => {
  const [singleFile, setSingleFile] = useState('');
  const [trainings, setTrainings] = useState<any>();
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [weeks, setWeeks] = useState<WeekProps[]>([{name: 'segunda', id:0}, {name: 'terça', id:1}, {name: 'quarta', id:2}, {name: 'quinta', id:3}, {name: 'sexta', id:4}, {name: 'sabado', id:5}, {name: 'domingo', id:6} ])

  const input = (res: any) => res;

  useEffect(() => {
    readFileXls();
  }, [singleFile])

  useEffect(() => {
    async function loadTrainings(): Promise<void> {
      const storageTrainings = await AsyncStorage.getItem('@Twin:trainings')
      //console.log('storageGet', storageTrainings)
      storageTrainings && setTrainings(JSON.parse(storageTrainings))
    }
    loadTrainings()
  }, [])

  const handleSelectWeek = useCallback((week:number)=>{
    setSelectedWeek(week)
  }, [setSelectedWeek])

  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.xls, DocumentPicker.types.xlsx],
      });
      console.log('resss', res)
      setSingleFile(res.uri);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        Alert.alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const readFileXls = () => {
    !!singleFile &&
      readFile(singleFile, 'ascii').then(async(res) => {
        /* parse file */
        const wb = XLSX.read(input(res), {type:'binary'});
        /* convert first worksheet to AOA */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];

        const trainingA:any = getTrainingRange('B2', 'D17', ws)
        const trainingB:any = getTrainingRange('F2', 'H17', ws)
        const trainingC:any = getTrainingRange('J2', 'L17', ws)
        const trainingD:any = getTrainingRange('B19', 'D34', ws)
        const trainingE:any = getTrainingRange('F19', 'H34', ws)
        const trainingF:any = getTrainingRange('J19', 'L34', ws)
        setTrainings([trainingA, trainingB, trainingC, trainingD, trainingE, trainingF].filter(Boolean));
        await AsyncStorage.setItem('@Twin:trainings', JSON.stringify([trainingA, trainingB, trainingC, trainingD, trainingE, trainingF].filter(Boolean)));
        // console.log('training:', trainingA, trainingB, trainingC, trainingD, trainingE, trainingF)
        console.log('pasouu', trainings);
      });
  }

  const getTrainingRange = (start: string, end: string, ws: any) => {
    const startDecode = XLSX.utils.decode_cell(start)
    const endDecode = XLSX.utils.decode_cell(end)

    const range = { s: startDecode, e: endDecode };
    let dataRange = [];

    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        let cell_address = { c: C, r: R };
        let data = XLSX.utils.encode_cell(cell_address);
        dataRange.push(ws[data]?.v);
      }
    }
    console.log('ainda nao chamou', dataRange)
    if(dataRange[0]){
      return mapperTraining(dataRange)
    }
    return null;
  }

  const mapperTraining = (data:any) => {
    console.log('\n\nchamouu', data)
    const arrEmpy:any = []
    const training = {
      id: data[0],
      name: data[3],
      timeInterval: data[data.length-3],
      exercises: arrEmpy
    }
    for(let t=9; t<45; t+=3){
      if(data[t]){
        training.exercises.push({
          name: data[t],
          series: data[t+1].split('x')[0],
          repetition: data[t+1].split('x')[1],
          technique: data[t+2],
        })
      }
    }
   // console.log('treinoo', training)
    return training
  }

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const importFile = async() => {
    await requestPermission()
    await selectOneFile()
  }

  return (
    <View>
        <ScrollView>
          <Button title='importar/atualizar' onPress={importFile} />
          <WeekListContainer>
            <WeekList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={weeks}
              keyExtractor={week=>week.name}
              renderItem={({item: week}) => (
                <WeekContainer selected={selectedWeek === week.id} onPress={()=>handleSelectWeek(week.id)}>
                  <WeekName selected={selectedWeek === week.id}>{week.name}</WeekName>
                </WeekContainer>
              )}
            />
          </WeekListContainer>

          {
            trainings && trainings[selectedWeek] &&
                <View style={[{marginBottom:40, marginLeft:25}]}>
                  <Text style={[{fontWeight: "bold", marginTop:10}]}>
                    {`${trainings[selectedWeek].id} - ${trainings[selectedWeek].name}`}
                  </Text>
                  {trainings[selectedWeek].exercises.map((exercise:any, index:number) => (
                    <Text key={index}>
                      {`${exercise.name} - (${exercise.series} x ${exercise.repetition}) ${exercise.technique? ('- '+ exercise.technique):''}`}
                    </Text>
                  ))}
                  <Text>
                      {trainings[selectedWeek].timeInterval}
                  </Text>
                </View>

          }
        </ScrollView>
    </View>)
}

export default MyTraining;
