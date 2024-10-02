import React, {useState, useEffect, useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BackgroundTimer from 'react-native-background-timer';

const OTPDisplay = ({clearGenteratedOTP, Textstyle}) => {
  const [timer, setTimer] = useState(90);

  useEffect(() => {
    let intervalId;

    const decrementTimer = () => {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1);
      } else {
        BackgroundTimer.clearInterval(intervalId);
        clearGenteratedOTP();
      }
    };

    // Start the timer when the component mounts
    intervalId = BackgroundTimer.setInterval(decrementTimer, 1000);

    return () => {
      // Clear the interval when the component unmounts
      BackgroundTimer.clearInterval(intervalId);
    };
  }, [timer, clearGenteratedOTP]);

  return (
    <>
      {timer > 0 ? (
        <Text
          style={{
            marginTop: responsiveHeight(4),
            color: 'black',
            alignSelf: 'center',
            ...Textstyle,
          }}>
          00:{timer}
        </Text>
      ) : null}
    </>
  );
};

export default OTPDisplay;
