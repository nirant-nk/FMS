import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconCircleButton from './IconCircleButton';
import Icons from '../../../assets/Icons/Icons';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import TextIconButton from './TextIconButton';

const AddWideButton = ({onPress, TextData, style}) => {
  return (
    <TextIconButton
      TextStyle={{color: 'white'}}
      TextData={TextData}
      ButtonStyle={[styles.AddButtonButton, style]}
      onPress={onPress}
      Icon={
        <Icons.Feather
          name={'plus'}
          color={'white'}
          size={responsiveWidth(5)}
        />
      }
    />
  );
};

export default AddWideButton;

const styles = StyleSheet.create({
  AddButtonButton: {
    // height: responsiveHeightPixel(52),
    width: null,
    // borderRadius: responsiveHeightPixel(52 / 2),
    backgroundColor: 'black',
    position: 'absolute',
    bottom: responsiveHeightPixel(111),
    right: responsiveWidthPixel(10),
    paddingRight: responsiveWidth(2),
    paddingLeft: responsiveWidth(4),
    columnGap: responsiveWidthPixel(2),
    borderRadius: 19,
    alignItems: 'center',
  },
});
