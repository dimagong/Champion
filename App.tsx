import React from 'react';
import type {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from './src/store/store';
import {Provider} from 'react-redux';

import {Provider as PaperProvider} from 'react-native-paper';

import {HomeScreen} from './src/screens/HomeScreen';
import {StatsScreen} from './src/screens/StatsScreen';
import {TeamScreen} from './src/screens/TeamScreen';

import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Navigation {
  navigate(destination: string): void;
}

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

const HeaderRightIcon = ({navigation}: {navigation: Navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('Team')}>
    <View>
      <MaterialCommunityIcon
        name="soccer-field"
        size={35}
        style={{transform: [{rotate: '90deg'}]}}
        color="white"
      />
    </View>
  </TouchableOpacity>
);

const HeaderLeftIcon = ({navigation}: {navigation: Navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
    <View>
      <MaterialIcon name="calendar-today" size={25} color="white" />
    </View>
  </TouchableOpacity>
);

const App: () => ReactNode = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
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
              options={({navigation}: {navigation: Navigation}) => ({
                headerRight: props => (
                  <HeaderRightIcon navigation={navigation} />
                ),
                headerLeft: props => <HeaderLeftIcon navigation={navigation} />,
                headerStyle: {
                  backgroundColor: '#212121',
                },
              })}
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
            <Stack.Screen
              name="Team"
              component={TeamScreen}
              options={{
                title: 'Team',
                headerStyle: {
                  backgroundColor: '#212121',
                },
                headerTintColor: '#ffffff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
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
  leftIcon: {
    width: 25,
    height: 25,
    fill: 'red',
    // color: 'white',
    backgroundColor: 'white',
    // filter: `sepia(100%)`,
  },
});

export default App;
