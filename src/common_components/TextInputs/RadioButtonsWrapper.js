import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {CustomeText_14pt} from '../TextComponents/CustomeText';

const RadioButtonsWrapper = ({Error, style, Title, children}) => {
  return (
    <View>
      {Title ? <CustomeText_14pt TextData={Title} /> : null}
      <View
        style={[
          styles.MainView,
          {
            alignItems: 'center',
            height: responsiveHeightPixel(50),
          },
          style,
        ]}>
        {children}
      </View>
      {Error && <Text style={styles.ErrorMsg}>{Error}</Text>}
    </View>
  );
};

export default memo(RadioButtonsWrapper);

const styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
  },
  MainView: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: responsiveHeight(0),
    marginTop: responsiveHeightPixel(10),
    columnGap: responsiveWidthPixel(16),
  },
});
