import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import { TrainingsListScreen } from '../../pages/Training'
import MyTraining from '../../pages/MyTraining'
import ExerciseVideos from '../../pages/ExerciseVideos';
import EmergencyExchanges from '../../pages/EmergencyExchanges';
import { Title } from 'react-native-paper';
import TrainingCategoryList from '../../pages/TrainingCategoryList';

const { Navigator, Screen } = createStackNavigator();

export const TrainingNavigator = (): React.ReactElement => (
  <Navigator>
    <Screen options={{headerShown: false}} name="TrainingsListScreen" component={TrainingsListScreen} />
    <Screen name="MyTraining" options={{title: 'Meu Treino', headerBackTitle:'Voltar'}} component={MyTraining} />
    <Screen name="TrainingCategoryList" options={{title: 'Grupos Musculares', headerBackTitle:'Voltar'}} component={TrainingCategoryList} />
    <Screen name="ExerciseVideos" options={{title: 'Videos dos Exercícios', headerBackTitle:'Voltar'}} component={ExerciseVideos} />
    <Screen name="EmergencyExchanges" options={{title: 'Trocas Emergenciais', headerBackTitle:'Voltar'}} component={EmergencyExchanges} />
  </Navigator>
);
