import React from 'react';
import {HomeStackScreen} from '../HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ShopScreen} from '../ShopScreen';
import {TabBar} from 'ui/components';

const Tab = createBottomTabNavigator();

export const RootScreen = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name="home" component={HomeStackScreen} />
        <Tab.Screen name="shop" component={ShopScreen} />
        <Tab.Screen name="user" component={ShopScreen} />
      </Tab.Navigator>
    </>
  );
};
