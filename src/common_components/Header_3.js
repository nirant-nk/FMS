import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header_1 from '../common_screens/Header_1';
import {styles_1} from './Entrie_1';
import {CustomeText_14pt} from './TextComponents/CustomeText';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';

const Header_3 = ({navigation}) => {
  const route = useRoute();
  const currentRouteName = getFocusedRouteNameFromRoute(route);

  return (
    <>
      <Header_1 BigTitle={'Personal Book'} SmallTitle={'Udhar Diye'} />
      <View style={[styles_1.RowContainer, styles.Header]}>
        <CustomeText_14pt
          onPress={() => navigation.navigate('UdharDiyeListingScreen')}
          TextData={'Udhar Diye List'}
          style={[
            currentRouteName == 'UdharDiyeListingScreen'
              ? styles.selectedStyle
              : null,
          ]}
        />

        <CustomeText_14pt
          onPress={() => navigation.navigate('UdharRecoveryListingScreen')}
          TextData={'Udhar Recovery List'}
          style={[
            currentRouteName == 'UdharRecoveryListingScreen'
              ? styles.selectedStyle
              : null,
          ]}
        />
      </View>
    </>
  );
};

export default Header_3;

const styles = StyleSheet.create({
  Header: {
    borderRadius: null,
    paddingHorizontal: responsiveWidthPixel(39),
    backgroundColor: '#F2F2F2',
  },
  selectedStyle: {
    borderBottomWidth: 2,
    paddingBottom: responsiveHeightPixel(3),
    height: responsiveHeightPixel(48),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
});
