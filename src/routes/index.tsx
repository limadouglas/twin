import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

import React from 'react';
// import Training from '../pages/Training';
import Training from '../pages/Training';
import Food from '../pages/Food';
import Question from '../pages/Question';
import More from '../pages/More';

import { IconTraining, IconFood, IconQuestion, IconMore, IconOption } from './menu';

const {Navigator, Screen} = createMaterialTopTabNavigator();
import { Tab, TabBar } from '@ui-kitten/components';
import { TrainingNavigator } from './navigation/training';

const OptionTabBar = ({ navigation, state }): React.ReactElement => {

  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  const renderTab = (route: string): React.ReactElement => {
    return (<Tab
      key={route}
      title={IconOption[route].name}
      icon={IconOption[route].icon}
    />
  )};

  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={onTabSelect}>
      {state.routeNames.map(renderTab)}
    </TabBar>
  );
};

const AppRoutes: React.FC = () => (
  <Navigator tabBarPosition='bottom' tabBar={(props) => <OptionTabBar {...props} />}>
    <Screen name="Training" component={TrainingNavigator} />
    <Screen name="Food"component={Food} />
    <Screen name="Question"component={Question} />
    <Screen name="More" component={More} />
  </Navigator>
);

export default AppRoutes;
