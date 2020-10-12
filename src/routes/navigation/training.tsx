import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import { TrainingsListScreen } from '../../pages/Training'
import MyTraining from '../../pages/MyTraining'
import ExerciseVideos from '../../pages/ExerciseVideos';
import EmergencyExchanges from '../../pages/EmergencyExchanges';
import { Title } from 'react-native-paper';

const { Navigator, Screen } = createStackNavigator();

export const TrainingNavigator = (): React.ReactElement => (
  <Navigator>
    <Screen options={{headerShown: false}} name="TrainingsListScreen" component={TrainingsListScreen} />
    <Screen name="MyTraining" options={{title: 'Meu Treino'}} component={MyTraining} />
    <Screen name="ExerciseVideos" options={{title: 'Videos dos Exercícios'}} component={ExerciseVideos} />
    <Screen name="EmergencyExchanges" options={{title: 'Trocas Emergenciais'}} component={EmergencyExchanges} />
  </Navigator>
);
