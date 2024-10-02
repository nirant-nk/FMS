import {View} from 'react-native';
import React from 'react';
import {styles_1} from './Entrie_1';
import {CustomeText_14pt, CustomeText_16pt} from './TextComponents/CustomeText';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import SizedView from './SizedBox/SizedView';

const UchalEntrie = ({item}) => {
  return (
    <View style={[styles_1.MainStyle]}>
      <View style={styles_1.RowContainer}>
        <CustomeText_14pt TextData={`Date : ${item?.date}`} />
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
      <CustomeText_16pt TextData={`Which Work : ${item?.which_work}`} />
      <SizedView height={responsiveHeightPixel(2)} />

      <CustomeText_16pt TextData={`From Who : ${item?.who_take}`} />
      <SizedView height={responsiveHeightPixel(2)} />

      <CustomeText_16pt
        TextData={`Debited from account : ${item?.debited_from}`}
      />
    </View>
  );
};

export default UchalEntrie;
