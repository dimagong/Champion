import * as React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {
  changeResultMatch,
  setNextMatch,
  setTeamsResults,
} from './../../store/slices';

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

import {
  Avatar,
  Button as ButtonPaper,
  Card,
  Title,
  Paragraph,
  FAB,
  Portal,
} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {CardComponent} from 'ui/components/CardComponent';
import {HeaderComponent} from 'ui/components/HeaderComponent';

import type {RootState} from '../../store/store';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const count = useSelector((state: RootState) => state?.resultMatch?.value);
  const state = useSelector((state: RootState) => state);
  console.log('state', state);
  const dispatch = useDispatch();

  const goStatsPage = () => navigation.navigate('Stats');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollView>
        <HeaderComponent />
        <View style={styles.container__view}>
          <CardComponent
            onClick={goStatsPage}
            contentTitle="The best players of the previous game"
            content="Junior players received the best marks"
          />
        </View>
        <View style={styles.container__view}>
          <CardComponent
            contentTitle="The best players of the previous game"
            content="Junior players received the best marks"
          />
        </View>
        <View style={styles.container__view}>
          <CardComponent
            contentTitle="The best players of the previous game"
            content="Junior players received the best marks"
          />
        </View>

        {/* <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Stats"
            onPress={() => navigation.navigate('Stats')}
            // onPress={() => navigation.setOptions({title: 'Updated!'})}
          />
        </View> */}
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
