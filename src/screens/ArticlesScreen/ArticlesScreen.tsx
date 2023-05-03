import * as React from 'react';

import {useSelector} from 'react-redux';

import {selectNextMatch} from '../../store/selectors/selectNextMatch';

import {
  Button,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import {CardComponent} from 'ui/components/CardComponent';
import {HeaderComponent} from 'ui/components/HeaderComponent';

import type {RootState} from '../../store/store';

export const ArticlesScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  console.log('route.params', route.params);
  const {title, content, img} = route.params;
  console.log('title', title);
  //   const redirectStatsPage = (screen = 'Stats', params = {}) =>
  //     navigation.navigate(screen, params);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollView>
        <View style={styles.container__view}>
          <CardComponent
            contentTitle="The best players of the previous game"
            content="Junior players received the best marks"
          />
        </View>
      </ScrollView>
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
