import * as React from 'react';
import {useTheme} from 'react-native-paper';
import {theme} from './../../../App';

import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

type HeaderComponentType = {
  nextMatch?: any;
};

export const HeaderComponent: React.FC<HeaderComponentType> = ({nextMatch}) => {
  const {teamHome, teamGuest, time} = nextMatch;
  const {deviceHeight, colors} = useTheme<typeof theme>();
  const currentHeight = deviceHeight / 2;

  return (
    <View
      style={[
        styles.header,
        {height: currentHeight, backgroundColor: colors.primary},
      ]}>
      <Image
        style={styles.header__img}
        source={require('./../images/football-field.webp')}
      />
      <View style={styles.header__content}>
        <View style={styles.circle__container}>
          <View style={styles.circle__wrapper__top}>
            <View
              style={[
                styles.half__circle__top,
                {backgroundColor: colors.primaryDark},
              ]}>
              <Icon name="timer" size={30} color="#fafafa" />
            </View>
          </View>
          <View style={styles.circle__wrapper__bottom}>
            <View
              style={[
                styles.half__circle__bottom,
                {backgroundColor: colors.primaryLight},
              ]}>
              <Text style={styles.timer__time}>
                {time.split(',')[1]?.trim() ?? ''}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.competition__container}>
          <Text style={[styles.competition__title, {color: colors.white}]}>
            {teamHome}
          </Text>
          <View style={styles.competition__resist}>
            <IconCommunity
              name="resistor"
              size={35}
              color={colors.primaryRed}
            />
            <View>
              <Text style={[styles.competition__vs, {color: colors.white}]}>
                VS
              </Text>
              <Text style={[styles.competition__time, {color: colors.white}]}>
                {time.split(',')[0]?.trim() ?? ''}
              </Text>
            </View>

            <IconCommunity
              name="resistor"
              size={35}
              color={colors.primaryRed}
            />
          </View>

          <Text style={[styles.competition__title, {color: colors.white}]}>
            {teamGuest}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__header: {
    width: '100%',
    height: 250,
  },
  header__img: {
    width: '100%',
    height: 150,
  },
  header: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    width: '100%',
    height: 350,
  },
  header__content: {
    flex: 1,
    alignItems: 'center',
  },
  circle__container: {
    position: 'absolute',
    marginTop: 0,
    transform: [{translateY: -45}],
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  timer__title: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  competition__container: {
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  competition__title: {
    fontSize: 20,
    fontWeight: `500`,
    textAlign: 'center',
  },
  competition__vs: {
    // color: 'white',
    fontSize: 20,
    fontWeight: `700`,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  competition__time: {
    fontSize: 12,
  },
  circle__wrapper__top: {
    width: 90, // half of the image width
    height: 45,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  half__circle__top: {
    width: 90,
    height: 90,
    borderRadius: 45, // half of the image width
    paddingTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
  circle__wrapper__bottom: {
    width: 90, // half of the image width
    height: 45,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  half__circle__bottom: {
    width: 90,
    height: 90,
    borderRadius: 45, // half of the image width
    position: 'absolute',
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 48,
  },
  timer__time: {
    color: '#fafafa',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  competition__resist: {
    paddingBottom: 3,
    paddingTop: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
