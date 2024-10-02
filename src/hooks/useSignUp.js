import {useState, useCallback, useRef, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {
  ValidateAnyInput,
  ValidateEmail,
  ValidatePhoneNumber,
} from '../Helpers/FormValidationHelpers';
import {
  SendOtpPostApi,
  SignUpPostApi,
} from '../network_storage_store/network_API/API';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import {titleStyle} from '../../assets/constants/styleContasts';
import {saveToken} from '../network_storage_store/LocalDB/LocalDb';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
const useSignUp = () => {
  const {updateProfileData} = useMyContext();

  const showToast = () => {
    ToastAndroid.show('You have registered successfully', ToastAndroid.SHORT);
  };

  const navigation = useNavigation();
  const FormFileds = {
    Name: '',
    MobileNumber: '',
    Email: '',
  };

  const [formData, setFormData] = useState(FormFileds);
  const [formDataError, setFormDataError] = useState(FormFileds);
  const [Loader, SetLoader] = useState(false);

  //   console.log('form data error', formDataError);
  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleErrorChange = useCallback((name, value) => {
    setFormDataError(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleSubmit = async () => {
    SetLoader(true);
    try {
      // ???? Validateing Input and seting Error messages
      let Name = ValidateAnyInput(formData.Name);
      let MobileNumber = ValidatePhoneNumber(formData.MobileNumber);
      let Email = ValidateEmail(formData.Email);

      if (Name || MobileNumber || Email) {
        handleErrorChange('Name', Name);
        handleErrorChange('MobileNumber', MobileNumber);
        handleErrorChange('Email', Email);
      } else {
        setFormDataError(FormFileds);

        const data = {
          name: formData.Name,
          mobile_number: formData.MobileNumber,
          email: formData.Email,
        };

        const res = await SignUpPostApi(data);

        if (res.status === 200) {
          saveToken(res?.data?.data?.token);
          showToast();

          goToHome();
          updateProfileData();
        } else {
          console.log('errors', res.data);

          showMessage({
            message: `Something Went Wrong While Updateing Profile ${res?.data}`,
            type: 'danger',
            titleStyle,
          });
          handleErrorChange('Email', res?.data?.data?.email);
          handleErrorChange('MobileNumber', res?.data?.data?.mobile_number);
        } //else
      }
    } catch (error) {
      console.log('err', error);
    } finally {
      SetLoader(false);
    }
  };

  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),

    // ... Add more refs for other inputs ...
  ];
  const handleNextFocus = index => {
    // console.log('handleNextFocus-->>', index);
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const goToHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'CivilBookScreen',
        },
      ],
    });
  };

  return {
    formData,
    formDataError,
    handleInputChange,
    handleSubmit,
    inputRefs,
    handleNextFocus,
    Loader,
    SetLoader,
  };
};

export default useSignUp;
