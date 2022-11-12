import * as React from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Header = () => {
  return (
    <View>
      <Image
        style={styles.header__img}
        source={require('./../../assets/images/artificial-grass-on-football-pitch.jpeg')}
      />
    </View>
  );
};

export const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <ScrollView>
        <Header />
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
  container__header: {
    width: '100%',
    height: 250,
  },
  header__img: {
    width: '100%',
    height: 250,
  },
});
