import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  CustomeText_14pt,
  CustomeText_16pt,
  CustomeText_18pt,
} from '../TextComponents/CustomeText';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const ImageTextFiled = ({item, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.MainView}>
      <Image
        resizeMode="contain"
        source={item.image}
        style={{
          height: responsiveHeightPixel(24),
          width: responsiveWidthPixel(27),
          marginRight: responsiveHeightPixel(20),
        }}
      />
      <CustomeText_16pt
        TextData={item.Name}
        style={{color: '#000000', fontWeight: '500'}}
      />
    </Pressable>
  );
};

export default ImageTextFiled;

const styles = StyleSheet.create({
  MainView: {
    height: responsiveHeightPixel(48),
    width: responsiveWidthPixel(341),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#F6F6F6',
    elevation: 5,
    marginTop: responsiveHeightPixel(16),
    alignItems: 'center',
    paddingHorizontal: responsiveHeightPixel(21),
    borderRadius: responsiveHeight(0.7),
  },
});
