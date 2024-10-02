import {Pressable, StyleSheet, Switch, View} from 'react-native';
import React from 'react';
import {styles_1} from './Entrie_1';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {CustomeText_12pt, CustomeText_14pt} from './TextComponents/CustomeText';
import SizedView from './SizedBox/SizedView';
import {imgPath} from '../../assets/constants/NetworkImage';
import CustomeImage from '../wrappers/CustomeImage';
import {IMAGES} from '../../assets/constants/ImageConstant';
import IconCircleButton from './Buttons/IconCircleButton';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {useNavigation} from '@react-navigation/native';

const SingleEmployee = ({item, ShowSwitch, SwitchValue, onSwitch}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles_1.MainStyle, styles.MainStyle]}>
      <CustomeImage
        defaultSource={IMAGES.USER}
        source={
          item?.image
            ? {
                uri: `${imgPath}${item?.image}`,
              }
            : IMAGES.USER
        }
        style={styles.image}
      />
      <View style={[styles.RowGap, {flex: 1}]}>
        <CustomeText_14pt TextData={item?.name} style={styles_1.BoldText} />
        <CustomeText_12pt TextData={'+91 ' + item?.mobile_number} />
      </View>
      {ShowSwitch ? (
        <>
          <SizedView style={styles.VerticleLine} />
          <Switch onValueChange={onSwitch} value={SwitchValue} />
        </>
      ) : (
        <>
          <IconCircleButton
            onPress={() => {
              navigation.navigate('OptionsOnOffScreen', {
                user_id: item?.id,
                name: item?.name,
              });
            }}
            Icon={
              <Icons.Ionicons
                name={'options-sharp'}
                color={'black'}
                size={responsiveWidth(8)}
              />
            }
          />
          <IconCircleButton
            onPress={() => {
              navigation.navigate('SiteTypesScreen', {
                user_id: item?.id,
                name: item?.name,
              });
            }}
            Icon={
              <Icons.FontAwesome6
                name={'building-user'}
                color={'black'}
                size={responsiveWidth(6)}
              />
            }
          />
        </>
      )}
    </View>
  );
};

export default SingleEmployee;

export const styles = StyleSheet.create({
  MainStyle: {
    marginTop: responsiveHeightPixel(7),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: responsiveWidthPixel(20),
  },
  image: {
    height: responsiveHeightPixel(50),
    width: responsiveHeightPixel(50),
    borderRadius: responsiveHeightPixel(50 / 2),
  },
  VerticleLine: {
    height: responsiveHeightPixel(43),
    width: 1,
    backgroundColor: '#000000',
  },
  RowGap: {
    rowGap: responsiveHeightPixel(3),
  },
});
