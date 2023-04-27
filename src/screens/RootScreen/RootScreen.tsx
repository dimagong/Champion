import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackScreen} from '../HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {ShopScreen} from '../ShopScreen';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const setIcon = (label: string) => {
  let iconName;

  switch (label) {
    case 'home':
      iconName = 'home';
      break;
    case 'shop':
      iconName = 'shopping-bag';
      break;
    case 'user':
      iconName = 'person';
      break;
    default:
      iconName = 'home';
      break;
  }

  return iconName;
};

function TabBar({state, descriptors, navigation}: any) {
  console.log('state bar', state);
  return (
    <View style={styles.tabContainer}>
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

        const iconName = setIcon(label);

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icons
              name={iconName}
              size={25}
              style={{color: isFocused ? '#fafafa' : '#757575'}}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

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

const styles = StyleSheet.create({
  tabContainer: {
    paddingTop: 15,
    paddingBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#000000',
  },
});

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
