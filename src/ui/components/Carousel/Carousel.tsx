import {FlatList, Text, View, StyleSheet} from 'react-native';
import {Avatar, useTheme} from 'react-native-paper';
import {theme} from './../../../../App';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IMatch} from 'src/interfaces';

interface ICarouselProps {
  lastMatches: IMatch[];
}
interface ISlideProps {
  data: IMatch;
}

const Slide = ({data}: ISlideProps) => {
  const navigation = useNavigation<any>();
  const {deviceHeight, deviceWidth, colors} = useTheme<typeof theme>();

  console.log('Slide data ', data);
  const teamHome = data.homeaway === 'home' ? `TJ Máj Černová` : data.team.name;
  const teamGuest =
    data.homeaway === 'home' ? data.team.name : `TJ Máj Černová`;

  const iconAvatar: string =
    data.result === 'W'
      ? 'human-handsup'
      : data.result === 'L'
      ? 'human-handsdown'
      : 'handshake';
  return (
    <View style={[styles.slide__box, styles.shadowProp]}>
      <View>
        <Avatar.Icon size={40} icon={iconAvatar} />
      </View>
      <View style={[styles.slide__container]}>
        <Text style={[styles.slide__box_content]}>{teamHome}</Text>
        <Text
          style={[
            styles.slide__box_content,
            styles.slide__box_score,
            {color: colors.alarm},
          ]}>
          {data.score}
        </Text>
        <Text style={[styles.slide__box_content]}>{teamGuest}</Text>
      </View>
    </View>
  );
};

export const Carousel = ({lastMatches}: ICarouselProps) => {
  return (
    <FlatList
      data={lastMatches}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      style={{flex: 1}}
      renderItem={({item}) => {
        return <Slide data={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  slide__box: {
    marginRight: 20,
    backgroundColor: 'white',
    padding: 5,
    height: 80,
    minWidth: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 8,
  },
  slide__container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  slide__box_content: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  slide__box_score: {
    fontSize: 20,
    fontWeight: '900',
  },
  shadowProp: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
