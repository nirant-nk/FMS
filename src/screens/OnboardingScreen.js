import {StyleSheet, View} from 'react-native';
import React from 'react';
import BackgroundImageWrpper_1 from '../wrappers/BackgroundImageWrpper_1';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  CustomeText_16pt,
  CustomeText_24pt,
} from '../common_components/TextComponents/CustomeText';
import TextButton from '../common_components/Buttons/TextButton';

const OnboardingScreen = ({navigation}) => {
  return (
    <BackgroundImageWrpper_1
      SplashBackground={IMAGES.BACKGROUND2}
      MainStyle={styles.MainStyle}>
      <CustomeText_24pt
        TextData={'Keep all data in one place'}
        style={styles.TextHeading}
      />
      <CustomeText_16pt
        TextData={
          'Centralize your information for seamless access and efficient management'
        }
        style={styles.Discription}
      />
      <View style={styles.ButtonsContainer}>
        <TextButton
          onPress={() => navigation.navigate('LoginAndRegisterScreen')}
          TextData={'Login'}
          ButtonStyle={{
            backgroundColor: '#1E1E1E',
            width: responsiveWidthPixel(300),
          }}
          TextStyle={{color: '#FFFFFF'}}
        />
      </View>
    </BackgroundImageWrpper_1>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  MainStyle: {
    paddingTop: responsiveHeightPixel(562),
    alignItems: 'center',
  },
  TextHeading: {
    fontWeight: 'bold',
  },
  Discription: {
    width: responsiveWidthPixel(291),
    color: '#585858',
    textAlign: 'center',
    marginTop: responsiveHeightPixel(15),
  },
  ButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeightPixel(33),
    width: '100%',
    columnGap: responsiveWidthPixel(8),
  },
});
