import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradientView from '../wrappers/LinearGradientView';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../assets/Icons/Icons';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {CustomeText_18pt} from '../common_components/TextComponents/CustomeText';
import SizedView from '../common_components/SizedBox/SizedView';

const Header_2 = ({onBack, Title}) => {
  const navigation = useNavigation();
  const onBackDefault = () => {
    navigation.goBack();
  };
  return (
    <LinearGradientView style={[styles.BackgroundHeader]}>
      <SizedView height={responsiveHeightPixel(44 + 18)} />
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={onBack || onBackDefault}>
          <Icons.Ionicons
            name={'arrow-back'}
            color={'black'}
            size={responsiveWidthPixel(35)}
          />
        </TouchableOpacity>
        <CustomeText_18pt TextData={Title} style={styles.BoldText} />
      </View>
    </LinearGradientView>
  );
};

export default Header_2;

const styles = StyleSheet.create({
  BackgroundHeader: {
    position: 'absolute',
    width: '100%',
    height: responsiveHeightPixel(130),
    zIndex: 1,
  },
  BoldText: {
    fontWeight: 'bold',
  },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidthPixel(16),
    columnGap: responsiveWidthPixel(15),
  },
});
