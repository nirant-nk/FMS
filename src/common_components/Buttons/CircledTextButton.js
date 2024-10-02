import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  CustomeText_14pt,
  CustomeText_16pt,
} from '../TextComponents/CustomeText';
import IconCircleButton from './IconCircleButton';
import TextButtonUnbounded from './TextButtonUnbounded';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const CircledTextButton = ({
  ButtonStyle,
  TextStyle,
  TextData,
  onPress,
  onSold,
  isExtended,
  Disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.MainStyle, ButtonStyle]}
      disabled={Disabled}>
      <CustomeText_14pt
        TextData={TextData}
        style={[styles.TextStyle, TextStyle]}
        numberOfLines={2}
      />
      {onSold ? (
        <TextButtonUnbounded
          onPress={onSold}
          TextData={'SOLD'}
          TextStyle={{color: '#FFFFFF'}}
          ButtonStyle={styles.SOLDStyle}
        />
      ) : null}
      {isExtended ? (
        <TextButtonUnbounded
          Disabled={Disabled}
          TextData={'Extended'}
          TextStyle={{color: '#FFFFFF', fontSize: responsiveFontSize(1.5)}}
          ButtonStyle={styles.SOLDStyle}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default CircledTextButton;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(110),
    width: responsiveHeightPixel(110),
    borderRadius: responsiveHeightPixel(110 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  TextStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: responsiveWidthPixel(5),
  },
  OptionContainer: {
    width: '33%',
    height: responsiveHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
    // margin: responsiveHeightPixel(10),
  },
  SOLDStyle: {
    backgroundColor: '#2FA904',
    height: responsiveHeightPixel(27),
    borderRadius: 5,
    paddingHorizontal: responsiveWidthPixel(17),
    marginTop: responsiveHeightPixel(4),
    paddingVertical: 0,
  },
});

export const CircledTextButtonWraped = ({...props}) => {
  return (
    <View style={[styles.OptionContainer]}>
      <CircledTextButton {...props} />
    </View>
  );
};

export const CircledIconButtonWraped = ({...props}) => {
  return (
    <IconCircleButton
      {...props}
      ButtonStyle={[styles.MainStyle, {backgroundColor: '#ECAF07'}]}
    />
  );
};
