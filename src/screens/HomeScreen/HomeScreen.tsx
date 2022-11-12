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
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.header__img}
        source={require('assets/images/artificial-grass-on-football-pitch.jpeg')}
      />
      <View style={styles.header__content}>
        <View style={styles.timer}>
          <Text style={styles.timer__title}>SOON:</Text>
          <Text style={styles.timer__time}>10 : 20</Text>
        </View>
        <View style={styles.competition}>
          <Text style={styles.competition__title}>ISKRA HRBOLTOVÁ</Text>
          <Text style={styles.competition__vs}>VS</Text>
          <Text style={styles.competition__title}>MÁJ RUŽOMBEROK-ČERNOVÁ</Text>
        </View>
      </View>
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
    height: 150,
  },
  header: {
    backgroundColor: '#000000',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: '100%',
    height: 300,
  },
  header__content: {
    // borderColor: 'red',
    // borderWidth: 2,
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  timer: {
    position: 'absolute',
    marginTop: 0,
    transform: [{translateY: -30}],
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#212121',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  timer__title: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  timer__time: {
    color: 'red',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },

  competition: {
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingTop: 20,
    // borderColor: 'red',
    // borderWidth: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  competition__title: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  competition__vs: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
