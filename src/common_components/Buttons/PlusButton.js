import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconCircleButton from './IconCircleButton';
import Icons from '../../../assets/Icons/Icons';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';

const PlusButton = ({onPress, AddButtonButton}) => {
  return (
    <IconCircleButton
      ButtonStyle={[styles.AddButtonButton, AddButtonButton]}
      onPress={onPress}
      Icon={
        <Icons.Feather
          name={'plus'}
          color={'white'}
          size={responsiveWidth(8)}
        />
      }
    />
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  AddButtonButton: {
    height: responsiveHeightPixel(52),
    width: responsiveHeightPixel(52),
    borderRadius: responsiveHeightPixel(52 / 2),
    backgroundColor: 'black',
    position: 'absolute',
    bottom: responsiveHeightPixel(111),
    right: responsiveWidthPixel(10),
  },
});
