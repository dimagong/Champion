import React from 'react';
import type {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {StatsScreen} from './src/screens/StatsScreen';
import {Button, Image, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{width: 30, height: 30}}
      source={{
        uri: 'https://api.sportnet.online/data/ppo/tj-maj-ruzomberok-cernova.futbalnet.sk/logo',
      }}
    />
  );
};

const HeaderRightIcon = () => (
  <Button
    // onPress={() => alert('This is a button!')}
    title="Info"
    color="#fff"
  />
);

const HeaderLeftIcon = () => (
  <Button
    // onPress={() => alert('This is a button!')}
    title="Info"
    color="#fff"
  />
);

const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: props => <HeaderRightIcon />,
            headerLeft: props => <HeaderLeftIcon />,
            headerStyle: {
              backgroundColor: '#212121',
            },
          }}
        />
        <Stack.Screen
          name="Stats"
          component={StatsScreen}
          options={{
            title: 'Stats',
            headerStyle: {
              backgroundColor: '#212121',
            },
            headerTintColor: '#ffffff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: 'red',
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
