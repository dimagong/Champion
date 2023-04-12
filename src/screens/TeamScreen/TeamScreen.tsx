import React from 'react';
import type {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  //Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Navigation} from 'src/interfaces';

const Stack = createNativeStackNavigator();

interface TeamScreenProps {
  navigation: Navigation;
}

export const TeamScreen = ({navigation}: TeamScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#040507" />
      <Text style={{fontSize: 40, color: 'white'}}>Team screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040507',
    alignItems: 'center',
  },
});
