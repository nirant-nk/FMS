import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  CustomeText_14pt,
  CustomeText_24pt,
} from '../common_components/TextComponents/CustomeText';
import TextButton from '../common_components/Buttons/TextButton';
import DefaultWrap from '../wrappers/DefaultWrap';
import SizedView from '../common_components/SizedBox/SizedView';
import Text_Input_1 from '../common_components/TextInputs/Text_Input_1';
import VerifyPhoneModal from './Modals/VerifyPhoneModal';
import useOtpVerification from '../hooks/useOtpVerification';
import useSignUp from '../hooks/useSignUp';
import LoadingModal from './Modals/LoadingModal';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import {sanitizeInputChar} from '../Helpers/SanitizationHelpers';

export const LoginComponent = ({SetShowLoginScreen}) => {
  const AllProps = useOtpVerification();
  const {
    handleInputChange,
    formData,
    formDataError,
    handleSendOTP,
    Visible,
    onClose,
    Loader,
  } = AllProps;
  return (
    <DefaultWrap style={styles.ContanerStyle}>
      <CustomeText_24pt
        TextData={
          <>
            Welcome <Text style={{color: '#ECAF07'}}>Back</Text>
          </>
        }
        style={styles.TextHeading}
      />
      <CustomeText_14pt
        TextData={'Enter the details below.'}
        style={styles.graytext}
      />
      <SizedView height={responsiveHeightPixel(40)} />
      <Text_Input_1
        FormObjName="MobileNumber"
        Title={'Phone Number'}
        Placeholder={'Enter Phone Number'}
        TextLimit={10}
        keyboardType={'numeric'}
        handleInputChange={handleInputChange}
        Value={formData.MobileNumber}
        Error={formDataError.MobileNumber}
        // TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
        // style={styles.DiscriptionView}
      />
      <SizedView height={responsiveHeightPixel(55)} />
      <TextButton
        onPress={handleSendOTP}
        TextData={'Send OTP'}
        ButtonStyle={{backgroundColor: '#1E1E1E', width: '100%'}}
        TextStyle={{color: '#FFFFFF'}}
      />

      {Visible ? (
        <VerifyPhoneModal
          onRequestClose={onClose}
          visible={Visible}
          {...AllProps}
        />
      ) : null}

      {Loader ? <LoadingModal isLoading={Loader} /> : null}
    </DefaultWrap>
  );
};
export const SignUpComponent = ({SetShowLoginScreen}) => {
  const AllProps = useSignUp();
  const {
    handleInputChange,
    formData,
    formDataError,
    inputRefs,
    handleNextFocus,
    handleSubmit,
    Loader,
    SetLoader,
  } = AllProps;
  return (
    <DefaultWrap style={styles.ContanerStyle}>
      <KeyboardAvoidingWrapper>
        <CustomeText_24pt
          TextData={
            <>
              Let's Get <Text style={{color: '#ECAF07'}}>Started</Text>
            </>
          }
          style={styles.TextHeading}
        />
        <CustomeText_14pt
          TextData={'Create your account here.'}
          style={styles.graytext}
        />
        <SizedView height={responsiveHeightPixel(40)} />
        <Text_Input_1
          inputRef={inputRefs[0]}
          onSubmitEditing={() => handleNextFocus(0)}
          FormObjName="Name"
          Title={'Name'}
          Placeholder={'Enter name'}
          handleInputChange={handleInputChange}
          Value={formData.Name}
          // TextArea
          Error={formDataError.Name}
          sanitizationFunction={sanitizeInputChar}
          // TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
          // style={styles.DiscriptionView}
        />
        <SizedView height={responsiveHeightPixel(18)} />

        <Text_Input_1
          inputRef={inputRefs[1]}
          onSubmitEditing={() => handleNextFocus(1)}
          FormObjName="MobileNumber"
          Title={'Phone Number'}
          Placeholder={'Enter Phone Number'}
          TextLimit={10}
          keyboardType={'numeric'}
          handleInputChange={handleInputChange}
          Value={formData.MobileNumber}
          Error={formDataError.MobileNumber}

          // TextArea
          // TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
          // style={styles.DiscriptionView}
        />
        <SizedView height={responsiveHeightPixel(18)} />

        <Text_Input_1
          inputRef={inputRefs[2]}
          onSubmitEditing={() => handleNextFocus(2)}
          FormObjName="Email"
          Title={'Email'}
          Placeholder={'Enter Email Address'}
          keyboardType={'email-address'}
          handleInputChange={handleInputChange}
          Value={formData.Email}
          Error={formDataError.Email}
          // TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
          // style={styles.DiscriptionView}
        />
        <SizedView height={responsiveHeightPixel(36)} />
        <TextButton
          onPress={handleSubmit}
          TextData={'Register'}
          ButtonStyle={{backgroundColor: '#1E1E1E', width: '100%'}}
          TextStyle={{color: '#FFFFFF'}}
        />
        <SizedView height={responsiveHeightPixel(16)} />

        <CustomeText_14pt
          onPress={() => SetShowLoginScreen(true)}
          style={{alignSelf: 'center'}}
          TextData={
            <>
              Already have an account?{' '}
              <Text style={{fontWeight: 'bold'}}>Login</Text>
            </>
          }
        />

        <LoadingModal isLoading={Loader} />
        {/* <SizedView height={responsiveHeightPixel(5)} /> */}
      </KeyboardAvoidingWrapper>
    </DefaultWrap>
  );
};

const styles = StyleSheet.create({
  MainStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  ContanerStyle: {
    flex: null,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: responsiveWidthPixel(28),
    elevation: 9,
  },
  TextHeading: {
    fontWeight: 'bold',
  },
  graytext: {
    color: '#7A7A7A',
  },
  Discription: {
    width: responsiveWidthPixel(291),
    color: '#585858',
    textAlign: 'center',
    marginTop: responsiveHeightPixel(15),
  },
});
