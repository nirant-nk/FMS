import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {CustomeText_16pt} from '../TextComponents/CustomeText';

const TextButton = ({ButtonStyle, TextStyle, TextData, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.MainStyle, ButtonStyle]}>
      <CustomeText_16pt
        TextData={TextData}
        style={TextStyle}
        adjustsFontSizeToFit
      />
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(48),
    width: responsiveWidthPixel(170),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
