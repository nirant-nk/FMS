import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';

import {
  CustomeText_14pt,
  CustomeText_18pt,
} from '../../common_components/TextComponents/CustomeText';
import TextButton from '../../common_components/Buttons/TextButton';
import SizedView from '../../common_components/SizedBox/SizedView';
import OTPDesign from '../OTP_components/OTPDesign';
import OTPDisplay from '../OTP_components/OTPTimerHelper';
import useOtpVerification from '../../hooks/useOtpVerification';
import OTPDesign4Digit from '../OTP_components/OTPDesign4Digit';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import IconCircleButton from '../../common_components/Buttons/IconCircleButton';
import Icons from '../../../assets/Icons/Icons';
import {useNavigation} from '@react-navigation/native';

const VerifyPhoneModal = ({
  visible,
  onRequestClose,
  formData,
  clearGenteratedOTP,
  handleResend,
  AfterOTPfilled,
  handleSubmit,
}) => {
  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              <IconCircleButton
                ButtonStyle={styles.CrossButton}
                onPress={onRequestClose}
                Icon={
                  <Icons.Entypo
                    name={'cross'}
                    color={'black'}
                    size={responsiveWidth(6)}
                  />
                }
              />
              <CustomeText_18pt
                TextData={'Verify your phone!'}
                style={{fontWeight: 'bold'}}
              />
              <CustomeText_14pt
                TextData={'Please enter the verification code'}
                style={styles.graytext}
              />
              <SizedView height={responsiveHeightPixel(25)} />
              {formData?.otp ? (
                <OTPDesign4Digit
                  AfterOTPfilled={AfterOTPfilled}
                  onChange={AfterOTPfilled}
                />
              ) : null}

              {/* <OTP Timer Display /> */}
              {formData?.otp ? (
                <OTPDisplay clearGenteratedOTP={clearGenteratedOTP} />
              ) : null}
              {!formData?.otp ? (
                <TouchableOpacity
                  onPress={handleResend}
                  style={{alignSelf: 'center'}}>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(1.8),
                      color: '#000000',
                    }}>
                    Didn't received code?{' '}
                    <Text style={{fontWeight: '600'}}>Resend</Text>{' '}
                  </Text>
                </TouchableOpacity>
              ) : null}
              <SizedView height={responsiveHeightPixel(25)} />
              {formData?.otp ? (
                <TextButton
                  onPress={handleSubmit}
                  TextData={'Verify My Phone'}
                  ButtonStyle={{backgroundColor: '#1E1E1E', width: '100%'}}
                  TextStyle={{color: '#FFFFFF'}}
                />
              ) : null}
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    width: responsiveWidthPixel(306),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 20,
    paddingHorizontal: responsiveWidthPixel(15),
    paddingVertical: responsiveHeightPixel(23),
    alignItems: 'center',
  },
  graytext: {
    color: '#7A7A7A',
  },
  CrossButton: {
    position: 'absolute',
    top: responsiveHeightPixel(-33 / 2),
  },
});

export default VerifyPhoneModal;
