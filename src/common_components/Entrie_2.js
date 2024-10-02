import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {CustomeText_14pt, CustomeText_18pt} from './TextComponents/CustomeText';
import SizedView from './SizedBox/SizedView';
import {SeeTheAttachments, styles_1} from './Entrie_1';
import {FormatDate, FormatDateYYYYMMDD} from '../Helpers/FormatDatehelpers';
import {imgPath} from '../../assets/constants/NetworkImage';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const Entrie_2 = ({item}) => {
  return (
    <View
      style={[
        styles_1.MainStyle,
        {marginTop: responsiveHeightPixel(10), elevation: 10},
      ]}>
      <View style={styles_2.RowContainer}>
        <View
          style={[
            styles_2.ColumnContainer,
            styles_1.GrayBackRounded,
            {width: responsiveWidthPixel(118)},
          ]}>
          <CustomeText_14pt TextData={'Amount'} />
          <CustomeText_18pt
            TextData={`₹ ${item?.amount || 0}`}
            style={styles_1.BoldText}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          />
        </View>
        <View style={[styles_2.ColumnContainer, {alignItems: null}]}>
          <CustomeText_14pt TextData={`Date : ${item?.date || ''}`} />
          <CustomeText_14pt
            TextData={`Paid by : ${item?.payment_method || ''}`}
          />
          <CustomeText_14pt
            TextData={`Receiver: ${item?.reciever_name || ''}`}
          />
        </View>
      </View>

      <SizedView height={responsiveHeightPixel(8)} />
      <SizedView style={styles_1.HorizontalLine} />
      <SizedView height={responsiveHeightPixel(8)} />

      <View
        style={[
          styles_2.ColumnContainer,
          styles_1.GrayBackRounded,
          {alignItems: 'null'},
        ]}>
        <CustomeText_14pt TextData={`Remark : ${item?.remark}`} />
      </View>
      <SizedView height={responsiveHeightPixel(8)} />

      <SeeTheAttachments DocumentURL={imgPath + item?.attachment} />
    </View>
  );
};

export default Entrie_2;

export const styles_2 = StyleSheet.create({
  ColumnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: responsiveHeightPixel(4),
    padding: responsiveHeightPixel(5),
  },
  RowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    columnGap: responsiveWidthPixel(20),
  },
});
