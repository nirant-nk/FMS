import {useState, useCallback, useRef, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {
  ValidateAnyInput,
  ValidatePhoneNumber,
} from '../Helpers/FormValidationHelpers';
import {db} from './PersonalBook/useAddKharcha';
import {getToken} from '../network_storage_store/LocalDB/LocalDb';
const useEditProfile = (onRequestClose, updateData) => {
  const showToast = () => {
    ToastAndroid.show('Profile Edited Successfully', ToastAndroid.SHORT);
  };

  const FormFileds = {
    Name: '',
    MobileNumber: '',
  };

  const [formData, setFormData] = useState(FormFileds);
  const [formDataError, setFormDataError] = useState({});
  const [Loader, SetLoader] = useState(false);

  // console.log('form data error', formDataError);
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
      let Name = ValidateAnyInput(formData.Name, 'Please Enter Your Name');
      let MobileNumber = ValidatePhoneNumber(formData.MobileNumber);

      if (Name || MobileNumber) {
        handleErrorChange('Name', Name);
        handleErrorChange('MobileNumber', MobileNumber);
      } else {
        setFormDataError({});
        editEntryByMobileNumber(formData.Name, formData.MobileNumber);
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

  const editEntryByMobileNumber = (name, mobileNumber) => {
    db.transaction(txn => {
      txn.executeSql(
        'UPDATE users SET name = ? WHERE mobile_number = ?',
        [name, mobileNumber],
        (tx, result) => {
          showToast();
          onRequestClose();
          updateData();
        },
        error => {
          console.log('Error updating entry: ', error);
        },
      );
    });
  };

  const getEntryByMobileNumber = async () => {
    const mobileNumber = await getToken();
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM users WHERE mobile_number = ?',
        [mobileNumber],
        (tx, results) => {
          if (results.rows.length > 0) {
            setFormData({
              MobileNumber: `${results?.rows.item(0)?.mobile_number}`,
              Name: results.rows.item(0)?.name,
            });
          } else {
            console.log('No entry found for the given mobile number.');
          }
        },
        error => {
          console.log('Error retrieving entry: ', error);
        },
      );
    });
  };

  useEffect(() => {
    getEntryByMobileNumber();
  }, []);

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

export default useEditProfile;
