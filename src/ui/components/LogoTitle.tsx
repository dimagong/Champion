import React from 'react';
import {Image} from 'react-native';

export const LogoTitle = () => {
  return (
    <Image
      style={{width: 30, height: 30}}
      source={require('../images/stiavnica.webp')}
    />
  );
};
