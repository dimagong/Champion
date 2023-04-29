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

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#212121',
    primaryRed: '#d50000',
    primaryDark: '#171717',
    primaryLight: '#4d4d4d',
    secondary: `#f50057`,
    secondaryDark: '#ab003c',
    secondaryLight: '#f73378',
    alarm: '#ff1744',
    white: '#f5f5f5',
    gray: '#bdbdbd',
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
