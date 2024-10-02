import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SizedView = ({height, width, style}) => {
  return <View style={[{height: height, width: width}, style]} />;
};

export default SizedView;
