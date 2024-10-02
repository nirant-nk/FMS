import { View, TextInput, StyleSheet } from 'react-native';
import React, { useState, useRef } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const OTPDesign = ({ onChange, AfterOTPfilled }) => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0); // Track focused input
  const inputs = useRef([]);

  const handleOTPChange = (index, text) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1) {
      let nextIndex = index + 1;
      while (nextIndex < 5 && newOtp[nextIndex] !== '') {
        nextIndex++;
      }
      if (nextIndex < 5) {
        inputs.current[nextIndex].focus();
        setFocusedIndex(nextIndex); // Update the focused index
      }
    } else if (text.length === 0 && index > 0) {
      const previousIndex = index - 1;
      inputs.current[previousIndex].focus();
      setFocusedIndex(previousIndex); // Update the focused index
    }

    // const myOTP = newOtp.join('');
    // if (myOTP.length === 5) {
    // setTypedOtp(newOtp.join(''));
    // console.warn('OTP DATA', newOtp.join(''));
    // AfterOTPfilled(newOtp.join(''));
    onChange(newOtp.join(''))
    // }
  };

  const handleKeyPress = (index, { nativeEvent }) => {
    const { key } = nativeEvent;
    // console.warn(key)
    // console.warn(otp[index])
    if (key !== 'Backspace' && otp[index]) {
      if (index < 4) {
        const newOtp = [...otp];
        newOtp[index + 1] = key;
        setOtp(newOtp);
        inputs.current[index + 1].focus();
        setFocusedIndex(index + 1);

        const myOTP = newOtp.join('');
        if (myOTP.length === 5) {
          // setTypedOtp(newOtp.join(''));
          // console.warn('OTP DATA', newOtp.join(''));
          AfterOTPfilled(newOtp.join(''));
        }
      }
    }

    if (key === 'Backspace' && otp[index] === '') {
      const previousIndex = index - 1;
      if (previousIndex >= 0) {
        inputs.current[previousIndex].focus();
        setFocusedIndex(previousIndex); // Update the focused index
      }
    }
  };

  return (
    <View
      style={{
        width: responsiveWidth(90),
        // height: responsiveHeight(10),
      }}>
      <View style={styles.otpView}>
        {otp.map((otpValue, index) => (
          <TextInput
            key={index}
            style={[
              styles.inputView,
              {
                borderColor: focusedIndex === index ? '#2EB0D1' : 'gray',
              },
            ]}
            value={otpValue}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={text => handleOTPChange(index, text)}
            onKeyPress={event => handleKeyPress(index, event)}
            ref={input => {
              inputs.current[index] = input;
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpView: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignSelf: 'center',
  },
  inputView: {
    // width: responsiveWidth(10),
    // height: responsiveHeight(6),
    // borderBottomWidth: responsiveWidth(0.5),
    // marginHorizontal: responsiveHeight(0.8),
    // alignSelf: 'center',
    // fontSize: responsiveFontSize(2.1),
    // textAlign: 'center',
    width: responsiveHeight(5),
    height: responsiveHeight(6),
    borderWidth: responsiveHeight(0.2), textAlign: 'center',
    borderRadius: responsiveHeight(1),
    marginHorizontal: responsiveHeight(1)
  },
});

export default OTPDesign;
