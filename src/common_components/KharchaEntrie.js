import {View} from 'react-native';
import React from 'react';
import {styles_1} from './Entrie_1';
import {CustomeText_14pt, CustomeText_16pt} from './TextComponents/CustomeText';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import SizedView from './SizedBox/SizedView';

const KharchaEntrie = ({item}) => {
  return (
    <View style={[styles_1.MainStyle]}>
      <View style={styles_1.RowContainer}>
        <View></View>
        <View
          style={[
            styles_1.GrayBackRounded,
            {paddingVertical: responsiveHeightPixel(5)},
          ]}>
          <CustomeText_14pt TextData={`Amount : ${item?.amount}`} />
        </View>
      </View>
      <SizedView height={responsiveHeightPixel(5)} />
      <SizedView style={styles_1.HorizontalLine} />
      <SizedView height={responsiveHeightPixel(8)} />
      {item?.name ? (
        <>
          <CustomeText_16pt TextData={`Source Name : ${item?.name}`} />
          <SizedView height={responsiveHeightPixel(2)} />
        </>
      ) : null}
      {item?.interest ? (
        <>
          <CustomeText_16pt TextData={`Intrest : ${item?.interest}`} />
          <SizedView height={responsiveHeightPixel(2)} />
        </>
      ) : null}
      {item?.incomeType ? (
        <>
          <CustomeText_16pt TextData={`Type : ${item?.incomeType}`} />
          <SizedView height={responsiveHeightPixel(2)} />
        </>
      ) : null}
      {item?.frequency ? (
        <>
          <CustomeText_16pt TextData={`Frequency : ${item?.frequency}`} />
          <SizedView height={responsiveHeightPixel(2)} />
        </>
      ) : null}

      {/* <FastImage
        source={{
          uri: `https://c1.wallpaperflare.com/preview/222/383/754/man-doll-fashion-display-dummy.jpg`,
        }}
        style={styles.image}
      />
      <View style={styles.RowGap}>
        <CustomeText_12pt TextData={'Credit amount'} />
        <CustomeText_14pt TextData={'₹1500'} style={styles_1.BoldText} />
      </View>
      <SizedView style={styles.VerticleLine} />
      <View style={styles.RowGap}>
        <CustomeText_14pt TextData={'Date :03/02/2023'} />
        <CustomeText_14pt TextData={'12 :00 AM'} />
      </View> */}
    </View>
  );
};

export default KharchaEntrie;
