import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Routes} from './../../interfaces/interfaces';

type RotesTypes = `${Routes}`;

const setIcon = (label: RotesTypes) => {
  let iconName;

  switch (label) {
    case Routes.Home:
      iconName = 'home';
      break;
    case Routes.Shop:
      iconName = 'shopping-bag';
      break;
    case Routes.User:
      iconName = 'person';
      break;
    default:
      iconName = 'home';
      break;
  }

  return iconName;
};

export const TabBar = ({state, descriptors, navigation}: any) => {
  console.log('state bar', state);
  console.log('descriptorsr', descriptors);
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

        const onPressNavigation = () => {
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
            onPress={onPressNavigation}
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
