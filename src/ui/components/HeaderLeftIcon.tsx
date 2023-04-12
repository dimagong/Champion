import React from 'react';
import {Navigation} from 'src/interfaces';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {View, TouchableOpacity} from 'react-native';

export const HeaderLeftIcon = ({navigation}: {navigation: Navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
    <View>
      <MaterialIcon name="calendar-today" size={25} color="white" />
    </View>
  </TouchableOpacity>
);
