import {StyleSheet, Switch, View} from 'react-native';
import React from 'react';
import {styles_1} from './Entrie_1';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {CustomeText_14pt} from './TextComponents/CustomeText';
import SizedView from './SizedBox/SizedView';

const SingleAccess = ({item, SwitchValue, onSwitch}) => {
  return (
    <View style={[styles_1.MainStyle, styles.MainStyle]}>
      <CustomeText_14pt
        TextData={item?.name || item?.site_name}
        style={[styles_1.BoldText, {flex: 1}]}
      />
      <>
        <SizedView style={styles.VerticleLine} />
        <Switch onValueChange={onSwitch} value={SwitchValue} />
      </>
    </View>
  );
};

export default SingleAccess;

export const styles = StyleSheet.create({
  MainStyle: {
    marginTop: responsiveHeightPixel(7),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: responsiveWidthPixel(20),
  },
  VerticleLine: {
    height: responsiveHeightPixel(43),
    width: 1,
    backgroundColor: '#000000',
  },
});
