import {View, TextInput, StyleSheet} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';

const OTPDesign4Digit = ({AfterOTPfilled, onChange}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0); // Track focused input
  const inputs = useRef([]);

  const handleOTPChange = (index, text) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1) {
      let nextIndex = index + 1;
      while (nextIndex < 4 && newOtp[nextIndex] !== '') {
        nextIndex++;
      }
      if (nextIndex < 4) {
        inputs.current[nextIndex].focus();
        setFocusedIndex(nextIndex); // Update the focused index
      }
    } else if (text.length === 0 && index > 0) {
      const previousIndex = index - 1;
      inputs.current[previousIndex].focus();
      setFocusedIndex(previousIndex); // Update the focused index
    }

    onChange(newOtp.join(''));

    // const myOTP = newOtp.join('');
    // if (myOTP.length === 4) {
    //   // setTypedOtp(newOtp.join(''));
    //   // console.warn('OTP DATA', newOtp.join(''));
    //   AfterOTPfilled(newOtp.join(''));
    // }
  };

  const handleKeyPress = (index, {nativeEvent}) => {
    const {key} = nativeEvent;
    // console.warn(key)
    // console.warn(otp[index])
    if (key !== 'Backspace' && otp[index]) {
      if (index < 3) {
        const newOtp = [...otp];
        newOtp[index + 1] = key;
        setOtp(newOtp);
        inputs.current[index + 1].focus();
        setFocusedIndex(index + 1);

        const myOTP = newOtp.join('');
        if (myOTP.length === 4) {
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
  );
};

const styles = StyleSheet.create({
  otpView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: responsiveWidthPixel(14),
    alignSelf: 'center',
  },
  inputView: {
    width: responsiveHeightPixel(52),
    height: responsiveHeightPixel(52),
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
  },
});

export default OTPDesign4Digit;
