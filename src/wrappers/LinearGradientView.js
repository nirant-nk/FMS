import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientView = ({children, ...props}) => {
  return (
    <LinearGradient colors={['#FFE59E', '#ECAF07']} {...props}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientView;
