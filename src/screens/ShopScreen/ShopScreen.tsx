import React from 'react';
import {Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Navigation} from 'src/interfaces';

interface ShopScreenProps {
  navigation: Navigation;
}

export const ShopScreen = ({navigation}: ShopScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#040507" />
      <Text style={{fontSize: 40, color: 'white'}}>Shop screen</Text>
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
