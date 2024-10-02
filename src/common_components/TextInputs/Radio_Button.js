import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CustomeText_16pt} from '../TextComponents/CustomeText';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
const Radio_Button = ({selectedId, item, onSelect, textStyle}) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: responsiveWidthPixel(6),
      }}
      onPress={() => {
        if (onSelect) {
          onSelect(item.id);
        }
      }}>
      <View style={styles.radio}>
        {selectedId == item.id && <View View style={styles.radiBg}></View>}
      </View>
      <CustomeText_16pt TextData={item.option} style={textStyle} />
    </Pressable>
  );
};

export default Radio_Button;

const styles = StyleSheet.create({
  midText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '400',
    color: 'black',
  },
  radiBg: {
    backgroundColor: '#888888',
    width: responsiveHeightPixel(10),
    height: responsiveHeightPixel(10),
    borderRadius: responsiveHeightPixel(10 / 2),
  },
  radio: {
    width: responsiveHeightPixel(20),
    height: responsiveHeightPixel(20),
    borderRadius: responsiveHeightPixel(20 / 2),
    borderWidth: responsiveHeight(0.2),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#888888',
  },
});
