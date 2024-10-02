import {StyleSheet, View} from 'react-native';
import React from 'react';
import {styles_1} from './Entrie_1';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import FastImage from 'react-native-fast-image';
import {CustomeText_12pt, CustomeText_14pt} from './TextComponents/CustomeText';
import SizedView from './SizedBox/SizedView';
import {imgPath} from '../../assets/constants/NetworkImage';
import {formatDate} from '../Helpers/CommonHelpers';
import {
  formatDateWithMonthAndTime,
  formatTime,
} from '../Helpers/FormatDatehelpers';

const VisitorEntrie = ({item}) => {
  return (
    <View style={[styles_1.MainStyle, styles.MainStyle]}>
      <FastImage
        source={{
          uri: `${imgPath}${item?.image}`,
        }}
        style={styles.image}
      />
      <View style={styles.RowGap}>
        <CustomeText_12pt TextData={'Credit amount'} />
        <CustomeText_14pt
          TextData={`₹${item?.amount}`}
          style={styles_1.BoldText}
        />
      </View>
      <SizedView style={styles.VerticleLine} />
      <View style={styles.RowGap}>
        <CustomeText_14pt TextData={formatDate(item.created_at)} />
        <CustomeText_14pt TextData={formatTime(item.created_at)} />
      </View>
    </View>
  );
};

export default VisitorEntrie;

export const styles = StyleSheet.create({
  MainStyle: {
    marginTop: responsiveHeightPixel(20),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: responsiveWidthPixel(20),
  },
  image: {
    height: responsiveHeightPixel(70),
    width: responsiveHeightPixel(70),
    borderRadius: responsiveHeightPixel(70 / 2),
  },
  VerticleLine: {
    height: responsiveHeightPixel(43),
    width: 1,
    backgroundColor: '#000000',
  },
  RowGap: {
    rowGap: responsiveHeightPixel(3),
  },
});
