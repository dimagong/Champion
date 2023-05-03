import * as React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {
  changeResultMatch,
  //setNextMatch,
  //setStatistics,
} from './../../store/slices';

import {selectNextMatch} from '../../store/selectors/selectNextMatch';

import {receiveStatistics} from './../../data/api/services';
import {fetchStatistics} from '../../store/thunks/fetchStatistics';
import {fetchNextMatches} from '../../store/thunks/fetchNextMatches';

import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
} from 'react-native';

import {Avatar, Button as ButtonPaper} from 'react-native-paper';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {CardComponent} from 'ui/components/CardComponent';
import {HeaderComponent} from 'ui/components/HeaderComponent';

import type {RootState} from '../../store/store';
import {Carousel} from 'ui/components';

import {useTheme} from 'react-native-paper';
import {theme} from './../../../App';
import {selectFinishedMatches} from './../../store/selectors';
import {IMatch} from 'src/interfaces';

export type ArticleType = {
  title: string;
  subtitle?: string;
  content: string;
  imgSource?: any;
};

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

const mockDataArticles = [
  {
    title: 'The best players of the previous game',
    content: 'Junior players received the best marks',
    imgSource: require('./../../ui/images/reward.webp'),
  },
  {
    title: 'New coach from Liverpool',
    content: 'The team will get a new legendary coach',
    imgSource: require('./../../ui/images/reward.webp'),
  },
  {
    title: 'Fans say, goodbye goalie',
    content: 'He had 20 shutouts',
    imgSource: require('./../../ui/images/reward.webp'),
  },
];

const renderListArticles = ({item, key, navigation}: any) => {
  console.log('item', item);
  const {title: contentTitle, content, imgSource: imgSource} = item;

  return (
    <CardComponent
      key={key}
      onClick={() => navigation.navigate('Articles', {...item})}
      contentTitle={contentTitle}
      content={content}
      imgSource={imgSource}
    />
  );
};

//TODO pass data for display articles on the Atricles screen
// TODO remove any type

export const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const {deviceHeight, deviceWidth, colors} = useTheme<typeof theme>();
  //const navigation = useNavigation();
  const count = useSelector((state: RootState) => state?.resultMatch?.value);
  const state = useSelector((state: RootState) => state);
  const lastMatches: IMatch[] = useSelector(selectFinishedMatches);
  console.log('state', state);
  const dispatch = useDispatch<any>();

  React.useEffect(() => {
    dispatch(fetchStatistics());
    dispatch(fetchNextMatches());
    // const data = receiveStatistics();
    // data.then(data => dispatch(setStatistics([...data])));
  }, []);

  const redirectStatsPage = (screen = 'Stats', params = {}) =>
    navigation.navigate(screen, params);
  const nextMatch = useSelector(selectNextMatch);
  console.log('teams', nextMatch);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollView>
        <HeaderComponent nextMatch={nextMatch} />
        <View style={[styles.container__carousel]}>
          <Carousel lastMatches={lastMatches} />
        </View>
        <View style={styles.container__view}>
          {mockDataArticles.map((item, idx) => {
            let key = idx;
            return renderListArticles({item, key, navigation});
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  container__carousel: {
    marginTop: 25,
    height: 250,
  },
  container__view: {
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 25,
  },
});
