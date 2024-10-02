import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { ToastAndroid } from 'react-native';
import {
  ValidateAnyInput,
  ValidateNumberGTO,
} from '../../Helpers/FormValidationHelpers';
import useModal from '../useModal';

import SQLite from 'react-native-sqlite-storage';
import { getToken } from '../../network_storage_store/LocalDB/LocalDb';

export const db = SQLite.openDatabase(
  {
    name: 'FinanceDB',
    location: 'default',
  },
  () => {
    console.log('Database opened');
  },
  error => {
    console.log('Error opening database: ', error);
  },
);

const useAddKharcha = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const type = route?.params?.type;

  const {
    onOpen: LoadingOpen,
    onClose: LoadingClose,
    Visible: LoadingVisible,
  } = useModal();

  const FormFileds = {
    Name: '',
    Amount: '',
    Interest: '',
    Frequency: '',
    Type: 'Credit',
    TypeID: 'Credit',
  };
  const [formData, setFormData] = useState(FormFileds);
  const [formDataError, setFormDataError] = useState({});

  const handleInputChange = useCallback((name, value) => {
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  }, []);

  const handleErrorChange = useCallback((name, value) => {
    setFormDataError(prevFormData => ({...prevFormData, [name]: value}));
  }, []);
  const handleSubmit = async () => {
    const handleSubmitNow = {
      'Income Sources': handleIncomeSourcesSubmit,
      'Expence Sources': handleIncomeSourcesSubmit,
      'Loans Section': handleLoansSubmit,
      'Investments & Savings': handleLoansSubmit,
      'Other Sources': handleOtherSubmit,
    };

    handleSubmitNow[type]();
  };

  const handleIncomeSourcesSubmit = async () => {
    try {
      LoadingOpen();
      const Name = ValidateAnyInput(formData.Name, 'Please Enter Source Name');
      const Amount = ValidateNumberGTO(
        formData.Amount,
        'Please Enter Amount',
        'Please Enter Valid Amount',
      );

      if (Name || Amount) {
        handleErrorChange('Name', Name);
        handleErrorChange('Amount', Amount);
      } else {
        setFormDataError({});
        const MobileNumber = await getToken();
        addEntry({
          name: formData.Name,
          amount: formData.Amount,
          type: type,
          mobileNumber: MobileNumber,
        });
      }
    } catch (error) {
      console.warn('Errror in Add Entry', error);
    } finally {
      LoadingClose();
    }
  };

  const handleLoansSubmit = async () => {
    try {
      LoadingOpen();
      const Name = ValidateAnyInput(formData.Name, 'Please Enter Source Name');
      const Amount = ValidateNumberGTO(
        formData.Amount,
        'Please Enter Amount',
        'Please Enter Valid Amount',
      );
      const Interest = ValidateNumberGTO(
        formData.Interest,
        'Please Enter Interest',
        'Please Enter Valid Interest',
      );
      const Frequency = ValidateNumberGTO(
        formData.Frequency,
        'Please Enter Frequency in Months',
        'Please Enter Valid Frequency in Months',
      );

      if (Name || Amount || Interest || Frequency) {
        handleErrorChange('Name', Name);
        handleErrorChange('Amount', Amount);
        handleErrorChange('Interest', Interest);
        handleErrorChange('Frequency', Frequency);
      } else {
        setFormDataError({});
        const MobileNumber = await getToken();
        addEntry({
          name: formData.Name,
          amount: formData.Amount,
          interest: formData.Interest,
          frequency: formData.Frequency,
          type: type,
          mobileNumber: MobileNumber,
        });
      }
    } catch (error) {
      console.warn('Errror in Add Entry', error);
    } finally {
      LoadingClose();
    }
  };

  const handleOtherSubmit = async () => {
    try {
      LoadingOpen();
      const Name = ValidateAnyInput(formData.Name, 'Please Enter Source Name');
      const Amount = ValidateNumberGTO(
        formData.Amount,
        'Please Enter Amount',
        'Please Enter Valid Amount',
      );
      const Interest = ValidateNumberGTO(
        formData.Interest,
        'Please Enter Interest',
        'Please Enter Valid Interest',
      );
      const Frequency = ValidateNumberGTO(
        formData.Frequency,
        'Please Enter Frequency',
        'Please Enter Valid Frequency',
      );

      if (Name || Amount || Interest || Frequency) {
        handleErrorChange('Name', Name);
        handleErrorChange('Amount', Amount);
        handleErrorChange('Interest', Interest);
        handleErrorChange('Frequency', Frequency);
      } else {
        setFormDataError({});
        const MobileNumber = await getToken();
        addEntry({
          name: formData.Name,
          amount: formData.Amount,
          interest: formData.Interest,
          frequency: formData.Frequency,
          type: type,
          mobileNumber: MobileNumber,
          incomeType: formData.TypeID,
        });
      }
    } catch (error) {
      console.warn('Errror in Add Entry', error);
    } finally {
      LoadingClose();
    }
  };

  const addEntry = ({
    name,
    amount,
    interest = null,
    frequency = null,
    type = null,
    mobileNumber,
    incomeType,
  }) => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS finance (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          name TEXT, 
          amount REAL, 
          interest REAL, 
          frequency REAL, 
          type TEXT, 
          mobile_number INTEGER,
          income_type TEXT
        )`,
        [],
        () => {
          console.log('Table created successfully');
        },
        error => {
          console.log('Error creating table: ', error);
        },
      );

      txn.executeSql(
        'INSERT INTO finance (name, amount, interest, frequency, type, mobile_number, income_type) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, amount, interest, frequency, type, mobileNumber, incomeType],
        (tx, result) => {
          ToastAndroid.show('Entry added successfully', ToastAndroid.LONG);
          ResetForm();
          navigation.goBack();
        },
        error => {
          console.log('Error adding entry: ', error);
        },
      );
    });
  };

  // console.warn({formDataError});
  // console.warn(MultiForms);
  const ResetForm = () => {
    setFormData(FormFileds);
    setFormDataError({});
  };
  // console.warn(formData);
  return {
    formData,
    formDataError,
    handleInputChange,
    handleSubmit,
    LoadingVisible,
  };
};

export default useAddKharcha;
