import React from 'react';
import {Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Navigation} from 'src/interfaces';

interface UserScreenProps {
  navigation: Navigation;
}

export const UserScreen = ({navigation}: UserScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#040507" />
      <Text style={{fontSize: 40, color: 'white'}}>User screen</Text>
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
