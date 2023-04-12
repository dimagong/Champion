import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderLeftIcon, HeaderRightIcon, LogoTitle} from 'ui/components';
import {Navigation} from 'src/interfaces';
import {HomeScreen} from '.';
import {StatsScreen} from '../StatsScreen';
import {ArticlesScreen} from '../ArticlesScreen';
import {TeamScreen} from '../TeamScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
        }}>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}: {navigation: Navigation}) => ({
            headerRight: props => <HeaderRightIcon navigation={navigation} />,
            headerLeft: props => <HeaderLeftIcon navigation={navigation} />,
            headerStyle: {
              backgroundColor: '#212121',
            },
          })}
        />
        <HomeStack.Screen
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
        <HomeStack.Screen
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
        <HomeStack.Screen
          name="Articles"
          component={ArticlesScreen}
          options={{
            title: 'Articles',
            headerStyle: {
              backgroundColor: '#212121',
            },
            headerTintColor: '#ffffff',
          }}
        />
      </HomeStack.Navigator>
    </>
  );
};
