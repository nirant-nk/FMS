import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {CustomeText_14pt} from '../TextComponents/CustomeText';

const TextButtonUnbounded = ({
  ButtonStyle,
  TextStyle,
  TextData,
  onPress,
  Disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={Disabled}
      onPress={onPress}
      style={[styles.MainStyle, ButtonStyle]}>
      <CustomeText_14pt TextData={TextData} style={TextStyle} />
    </TouchableOpacity>
  );
};

export default TextButtonUnbounded;

const styles = StyleSheet.create({
  MainStyle: {
    paddingHorizontal: responsiveWidthPixel(24),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: responsiveHeightPixel(5),
  },
});
