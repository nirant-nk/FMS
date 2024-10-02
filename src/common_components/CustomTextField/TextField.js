import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  CustomeText_14pt,
  CustomeText_18pt,
} from '../TextComponents/CustomeText';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const TextField = ({item}) => {
  return (
    <View style={styles.MainView}>
      <CustomeText_18pt
        TextData={item.name}
        style={{color: '#000000', fontWeight: '500'}}
      />
      <CustomeText_18pt
        TextData={
          <>
            {item.price}
            <CustomeText_14pt
              TextData={` /kg`}
              style={{color: '#757575', fontWeight: '500'}}
            />
          </>
        }
        style={{color: '#000000', fontWeight: '500'}}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  MainView: {
    height: responsiveHeightPixel(47),
    width: responsiveWidthPixel(355),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 5,
    marginTop: responsiveHeightPixel(10),
    alignItems: 'center',
    paddingHorizontal: responsiveHeightPixel(15),
    borderRadius: responsiveHeight(1),
    alignSelf: 'center',
  },
});
