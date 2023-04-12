import React from 'react';
import type {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './src/store/store';
import {Provider as ReduxProvider} from 'react-redux';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {RootScreen} from './src/screens';
import {Dimensions} from 'react-native';

const Stack = createNativeStackNavigator();

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#22409A',
    accent: '#f1c40f',
    containerBack: '#ddd',
  },
  deviceWidth: deviceWidth,
  deviceHeight: deviceHeight,
};

const App: () => ReactNode = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootScreen />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
