import * as React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {
  changeResultMatch,
  //setNextMatch,
  //setStatistics,
} from './../../store/slices';

import {selectNextMatch} from './../../store/selectors/selectors';

import {receiveStatistics} from './../../data/api/services';
import {fetchStatistics} from '../../store/thunks/fetchStatistics';
import {fetchNextMatches} from '../../store/thunks/fetchNextMatches';

import {StatusBar, SafeAreaView, StyleSheet, FlatList} from 'react-native';

import {Avatar, Button as ButtonPaper} from 'react-native-paper';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {CardComponent} from 'ui/components/CardComponent';
import {HeaderComponent} from 'ui/components/HeaderComponent';

import type {RootState} from '../../store/store';

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

const renderListArticles = ({item, navigation}: any) => {
  console.log('item', item);
  const {title: contentTitle, content, imgSource: imgSource} = item;

  return (
    <CardComponent
      onClick={() => navigation.navigate('Articles', {...item})}
      contentTitle={contentTitle}
      content={content}
      imgSource={imgSource}
    />
  );
};

//TODO pass data for display articles on the Atricles screen
// TODO remove any type

export const HomeScreen = ({navigation}: {navigation: any}) => {
  //const navigation = useNavigation();
  const count = useSelector((state: RootState) => state?.resultMatch?.value);
  const state = useSelector((state: RootState) => state);
  //console.log('state', state);
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
      {/* <ScrollView> */}
      <HeaderComponent nextMatch={nextMatch} />
      <FlatList
        style={styles.container__view}
        data={mockDataArticles}
        renderItem={({item}) => renderListArticles({item, navigation})}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__view: {
    padding: 20,
  },
});
