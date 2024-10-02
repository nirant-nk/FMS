import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackgroundImageWrpper_1 from '../wrappers/BackgroundImageWrpper_1';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {LoginComponent, SignUpComponent} from '../components/LoginComponent';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import DefaultWrap from '../wrappers/DefaultWrap';

const LoginAndRegisterScreen = ({navigation, route}) => {
  const RouteType = route?.params?.type;
  const [showLoginScreen, SetShowLoginScreen] = useState(true);

  useEffect(() => {
    if (RouteType) {
      SetShowLoginScreen(false);
    }
  }, []);
  return (
    <DefaultWrap>
      <KeyboardAvoidingWrapper style={{backgroundColor: 'white'}}>
        <BackgroundImageWrpper_1
          SplashBackground={IMAGES.BACKGROUND2}
          MainStyle={styles.MainStyle}>
          <>
            {showLoginScreen ? (
              <LoginComponent SetShowLoginScreen={SetShowLoginScreen} />
            ) : (
              <SignUpComponent SetShowLoginScreen={SetShowLoginScreen} />
            )}
          </>
        </BackgroundImageWrpper_1>
      </KeyboardAvoidingWrapper>
    </DefaultWrap>
  );
};

export default LoginAndRegisterScreen;

const styles = StyleSheet.create({
  MainStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: responsiveHeight(100),
  },
});
