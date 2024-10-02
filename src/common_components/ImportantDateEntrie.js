import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CustomeText_14pt, CustomeText_16pt} from './TextComponents/CustomeText';
import {styles_1} from './Entrie_1';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';

const ImportantDateEntrie = ({item}) => {
  return (
    <View style={styles.GrayBackRounded}>
      <CustomeText_14pt TextData={item.work} style={styles_1.BoldText} />
      <CustomeText_14pt
        TextData={`Date : ${item.date}`}
        style={styles_1.BoldText}
      />
    </View>
  );
};

export default ImportantDateEntrie;

export const styles = StyleSheet.create({
  GrayBackRounded: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: responsiveWidthPixel(19),
    marginHorizontal: responsiveWidthPixel(12),
    marginTop: responsiveHeightPixel(17),
  },
});
