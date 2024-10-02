import {StyleSheet, Text, View, Switch} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {responsiveWidthPixel} from './ResponsivePixel';
const CommonSwitch = ({heading, onValueChange, value, style,trackColor,thumbColor}) => {
  return (
    <View style={[styles.MainContainer, style]}>
      {heading ? <Text style={styles.midText}>{heading}</Text> : null}
      <Switch
        trackColor={trackColor || {false: 'gray', true: '#4DCF07'}}
        thumbColor={thumbColor || 'white'}
        ios_backgroundColor="gray"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

export default CommonSwitch;

const styles = StyleSheet.create({
  midText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: 'black',
  },
  MainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: responsiveWidthPixel(5),
  },
});
