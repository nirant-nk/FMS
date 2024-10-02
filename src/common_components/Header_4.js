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

const Header_4 = ({navigation}) => {
  const route = useRoute();
  const currentRouteName = getFocusedRouteNameFromRoute(route);

  return (
    <>
      <Header_1 BigTitle={'File Manager'} />
      <View style={{backgroundColor: 'white'}}>
        <View style={[styles_1.RowContainer, styles.Header]}>
          <View style={styles.OptionContainer}>
            <CustomeText_14pt
              onPress={() => navigation.navigate('PhotosScreen')}
              TextData={'Photos'}
              style={[
                currentRouteName == 'PhotosScreen'
                  ? styles.selectedStyle
                  : null,
              ]}
            />
          </View>
          <View style={[styles.OptionContainer, {flex: 1.5}]}>
            <CustomeText_14pt
              onPress={() => navigation.navigate('VideosScreen')}
              TextData={'Videos'}
              style={[
                currentRouteName == 'VideosScreen'
                  ? styles.selectedStyle
                  : null,
              ]}
            />
          </View>
          <View style={styles.OptionContainer}>
            <CustomeText_14pt
              onPress={() => navigation.navigate('DocumentsScreen')}
              TextData={'Documents'}
              style={[
                currentRouteName == 'DocumentsScreen'
                  ? styles.selectedStyle
                  : null,
              ]}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Header_4;

const styles = StyleSheet.create({
  Header: {
    borderRadius: null,
    paddingHorizontal: responsiveWidthPixel(23),
    backgroundColor: '#FFF9E9',
    marginTop: responsiveHeightPixel(16),
    justifyContent: null,
  },
  selectedStyle: {
    borderBottomWidth: 2,
    paddingBottom: responsiveHeightPixel(3),
    height: responsiveHeightPixel(48),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    paddingHorizontal: responsiveWidthPixel(11),
    backgroundColor: '#FFE9AE',
    borderColor: '#D99F00',
  },
  OptionContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
