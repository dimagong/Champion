import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderLeftIcon, HeaderRightIcon, LogoTitle} from 'ui/components';
import {Navigation} from 'src/interfaces';
import {HomeScreen, HomeStackScreen} from '../HomeScreen';
import {StatsScreen} from '../StatsScreen';
import {ArticlesScreen} from '../ArticlesScreen';
import {TeamScreen} from '../TeamScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';
import {ShopScreen} from '../ShopScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MyTabBar({state, descriptors, navigation}: any) {
  console.log('state bar', state);
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export const RootScreen = () => {
  return (
    <>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
      </Tab.Navigator>
    </>
  );
};

{
  /* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: props => <LogoTitle />,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
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
        <Stack.Screen
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
      </Stack.Navigator>
     */
}
