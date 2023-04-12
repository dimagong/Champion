import React from 'react';

import {Navigation} from 'src/interfaces';

import {View, TouchableOpacity} from 'react-native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const HeaderRightIcon = ({navigation}: {navigation: Navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('Team')}>
    <View>
      <MaterialCommunityIcon
        name="soccer-field"
        size={35}
        style={{transform: [{rotate: '90deg'}]}}
        color="white"
      />
    </View>
  </TouchableOpacity>
);
