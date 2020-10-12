import 'react-native-gesture-handler';

import React from 'react';

import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Routes from './routes';

import { NavigationContainer } from '@react-navigation/native';

export default (): React.ReactFragment => (
  <NavigationContainer>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Routes />
    </ApplicationProvider>
  </NavigationContainer>

);
