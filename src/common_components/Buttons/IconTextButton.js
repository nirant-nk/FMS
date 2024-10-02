import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {CustomeText_16pt} from '../TextComponents/CustomeText';

const IconTextButton = ({ButtonStyle, Icon, onPress, TextData}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.MainStyle, ButtonStyle]}>
      {Icon}
      <CustomeText_16pt TextData={TextData} style={styles.Text} />
    </TouchableOpacity>
  );
};

export default IconTextButton;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(56),
    width: responsiveHeightPixel(171),
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    columnGap: responsiveWidthPixel(9),
    flexDirection: 'row',
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
