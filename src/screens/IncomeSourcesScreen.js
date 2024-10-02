import {StyleSheet, View} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import Header_1 from '../common_screens/Header_1';
import {
  CircledIconButtonWraped,
  CircledTextButtonWraped,
} from '../common_components/Buttons/CircledTextButton';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {styles_2} from '../common_components/Entrie_2';
import Icons from '../../assets/Icons/Icons';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useDailyKharchaPrint} from '../hooks/PrintIt';

const IncomeSourcesScreen = ({navigation, route}) => {
  const type = route?.params?.type;
  const {PrintItNow} = useDailyKharchaPrint();

  return (
    <>
      <Header_1 BigTitle={type} onPrint={PrintItNow} />
      <DefaultWrap style={styles.MainStyle}>
        <View style={[styles_2.RowContainer, {width: null}]}>
          <CircledIconButtonWraped
            Icon={
              <Icons.AntDesign
                name={'plus'}
                color={'white'}
                size={responsiveWidth(15)}
              />
            }
            onPress={() => navigation.navigate('AddKharchaScreen', {type})}
          />
          <CircledTextButtonWraped
            TextData={"View\nEntry's"}
            onPress={() => navigation.navigate('KharchaListingScreen', {type})}
          />
        </View>
      </DefaultWrap>
    </>
  );
};

export default IncomeSourcesScreen;

const styles = StyleSheet.create({
  MainStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: responsiveHeightPixel(90),
  },
});
