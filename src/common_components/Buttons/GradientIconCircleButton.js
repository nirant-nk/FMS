import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveHeightPixel} from '../../Helpers/ResponsivePixel';
import LinearGradient from 'react-native-linear-gradient';

const GradientIconCircleButton = ({ButtonStyle, Icon}) => {
  return (
    <LinearGradient
      colors={['#FFE59E', '#ECAF07']}
      style={[styles.MainStyle, ButtonStyle]}>
      {Icon}
    </LinearGradient>
  );
};

export default GradientIconCircleButton;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(54),
    width: responsiveHeightPixel(54),
    borderRadius: responsiveHeightPixel(54 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
