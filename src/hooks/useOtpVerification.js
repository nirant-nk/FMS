import React, {useCallback} from 'react';
import {ValidatePhoneNumber} from '../Helpers/FormValidationHelpers';
import {
  LoginPostApi,
  SendOtpPostApi,
} from '../network_storage_store/network_API/API';
import {ToastAndroid} from 'react-native';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import useModal from './useModal';
import {useNavigation} from '@react-navigation/native';
import {saveToken} from '../network_storage_store/LocalDB/LocalDb';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {db} from './PersonalBook/useAddKharcha';

const useOtpVerification = () => {
  const {updateProfileData} = useMyContext();
  const navigation = useNavigation();
  const {Visible, onOpen, onClose} = useModal();

  const [Loader, SetLoader] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [formDataError, setFormDataError] = React.useState({});

  // Event handler to update the form data
  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleErrorChange = useCallback((name, value) => {
    setFormDataError(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const clearGenteratedOTP = async () => {
    handleInputChange('otp', '');
  };

  const addEntry = (name, mobileNumber) => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          name TEXT, 
          mobile_number INTEGER UNIQUE
        )`,
        [],
        () => {
          console.log('Table created successfully');
          goToHome();
        },
        error => {
          console.log('Error creating table: ', error);
        },
      );

      txn.executeSql(
        'INSERT INTO users (name, mobile_number) VALUES (?, ?)',
        [name, mobileNumber],
        (tx, result) => {
          console.log('Entry added successfully');
        },
        error => {
          console.log('Error adding entry: ', error);
        },
      );
    });
  };

  const getEntryByMobileNumber = mobileNumber => {
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM users WHERE mobile_number = ?',
        [mobileNumber],
        (tx, results) => {
          if (results.rows.length > 0) {
            goToHome();
          } else {
            addEntry('', mobileNumber);
            console.log('No entry found for the given mobile number.');
          }
        },
        error => {
          console.log('Error retrieving entry: ', error);
          addEntry('', mobileNumber);
        },
      );
    });
  };

  const handleSendOTP = async () => {
    try {
      setFormDataError({});
      SetLoader(true);
      const MobileNumber = ValidatePhoneNumber(formData.MobileNumber);
      if (MobileNumber) {
        handleErrorChange('MobileNumber', MobileNumber);
      } else {
        await saveToken(formData.MobileNumber);
        getEntryByMobileNumber(formData.MobileNumber);
        ToastAndroid.show('Login Successfully!', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.warn('Something Went Wrong While Sending OTP');
    } finally {
      SetLoader(false);
    }
  };

  const handleResend = async () => {
    try {
      SetLoader(true);
      setFormDataError({});
      const MobileNumber = ValidatePhoneNumber(formData.MobileNumber);
      if (MobileNumber) {
        handleErrorChange('MobileNumber', MobileNumber);
      } else {
        const data = {
          mobile_number: formData.MobileNumber,
        };
        const res = await SendOtpPostApi(data);
        if (res?.status === 200) {
          ToastAndroid.show('OTP Resent successfully!', ToastAndroid.SHORT);
          handleInputChange('otp', true);
        } else {
          showMiniMessage({
            message: `Something Went Wrong! While Sending OTP! ${res?.data?.data}`,
            type: 'danger',
          });
        }
      }
    } catch (error) {
      console.warn('Something Went Wrong While Resending Sending OTP');
    } finally {
      SetLoader(false);
    }
  };

  const AfterOTPfilled = async code => {
    handleInputChange('TypedOtp', code);
  };

  const handleSubmit = async () => {
    if (formData?.TypedOtp?.length == 4) {
      const data = {
        mobile_number: formData.MobileNumber,
        entered_otp: formData.TypedOtp,
      };
      const res = await LoginPostApi(data);
      if (res?.status === 200) {
        saveToken(res?.data?.data?.token);
        ToastAndroid.show('Login successfully!', ToastAndroid.SHORT);
        goToHome();
        onClose();
        updateProfileData();
      } else {
        ToastAndroid.show(res?.data?.data, ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.showWithGravity(
        formData.TypedOtp ? `Please Enter Valid OTP` : `Please Enter OTP`,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
  };

  const goToHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'CivilBookScreen',
          params: {
            MobileNumber: formData.MobileNumber,
          },
        },
      ],
    });
  };
  return {
    Loader,
    formData,
    formDataError,
    clearGenteratedOTP,
    handleSendOTP,
    AfterOTPfilled,
    handleSubmit,
    handleInputChange,
    Visible,
    onOpen,
    onClose,
    handleResend,
  };
};

export default useOtpVerification;
