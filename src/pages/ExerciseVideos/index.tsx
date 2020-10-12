import React, { useCallback, useEffect } from 'react';
import { Alert, ListRenderItemInfo, Modal, Platform, ScrollView, View } from 'react-native';
import { Button, Icon, Input, Layout, Menu, MenuGroup, MenuItem, StyleService, useStyleSheet } from '@ui-kitten/components';
import { ItemComponent } from './extra/item.component';
import { SearchIcon } from './extra/icons';
import ExerciseVideoList, {ExerciseVideoListProps} from '../../constants/ExerciseVideosList';
import { Linking } from 'react-native';
import WebView from 'react-native-webview';
//import { VideoModal } from 'src/components/video-modal.component';

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);
  const [searchQuery, setSearchQuery] = React.useState<string>();
  const [exerciseList, setExerciseList] = React.useState<ExerciseVideoListProps[]>([]);
  const [showVideo, setShowVideo] = React.useState<boolean>(false);
  const [urlVideo, setUrlVideo] = React.useState<string>('');

  useEffect(() => {
    setExerciseList(ExerciseVideoList)
  }, [ExerciseVideoList])

  const handlePress = useCallback(async (url) => {
    // const supported = await Linking.canOpenURL(url);
    setUrlVideo(url)
    setShowVideo(true)
    // if (supported) {
    //   await Linking.openURL(url);
    // } else {
    //   Alert.alert(`Don't know how to open this URL: ${url}`);
    // }
  }, []);

  const CloseIcon = (props) => (
    <Icon {...props} name='close-circle-outline'/>
  );
  const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );

  const renderItem =  (info: ListRenderItemInfo<Item>) => (
    <ItemComponent
      style={styles.item}
      item={info.item}
    />
  );

  const renderVideo = () => (
    <>
      <Modal
      transparent={true}
      visible={showVideo}
      onRequestClose={() => setShowVideo(false) }>
        <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            minWidth: '100%',
            minHeight: 500,
          }}>
            <WebView
              allowsFullscreenVideo={true}
              style={{ flex:1, marginTop: (Platform.OS == 'ios') ? 20 : 0,}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{uri: urlVideo}}//+this.state.pictureData.idVideo }}
              //'https://www.youtube.com/embed/Z43Ji7H2Xnw'
            />
            <Button style={{margin:2}} appearance='ghost' accessoryLeft={CloseIcon} onPress={() => setShowVideo(false)} />
          </View>
        </View>
      </Modal>
    </>
  )

  const renderHeader = (): React.ReactElement => (
    <Layout
      style={styles.header}
      level='1'>
      <Input
        placeholder='Search'
        value={searchQuery}
        // accessoryRight={SearchIcon}
      />
    </Layout>
  );

  const openMenu = (indexItem: number) => {
    console.log('ok')
    //setShowVideo(true)
    //const item  = exerciseList[index]
    //item.isRender = true
    // if(showItens.indexOf(indexItem) < 0)
    //   setShowItens([indexItem])
  }

  return (
    <>
      {renderHeader()}
      {renderVideo()}
      <Menu
      style={{ flex:1}}
        // selectedIndex={selectedIndex}
        //onSelect={index => setSelectedIndex(index)}
        >
        {
          exerciseList.map((item, index) => {
            return (<MenuGroup
              key={item.categoryName}
              title={item.categoryName}
              onPressOut={()=>openMenu(index)}>
              {
                item.exerciseList.map((exercise, index) => (
                    <MenuItem key={'exercise'+index} onPress={()=>handlePress(exercise.link)} title={exercise.name} accessoryLeft={StarIcon} />
                  ))
              }
            </MenuGroup>
          )})
        }
      </Menu>
    </>
);
};

const themedStyles = StyleService.create({
  list: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'background-basic-color-3',
  },
});
