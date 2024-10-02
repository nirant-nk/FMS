import {View} from 'react-native';
import React from 'react';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import SizedView from './SizedBox/SizedView';
import Text_Input_1 from './TextInputs/Text_Input_1';
import TextButton from './Buttons/TextButton';
import {WideButtonStyles} from './Form_1';
import {styles_1} from './Entrie_1';
import {styles_3} from '../screens/AddContractIndividualExpensesScreen';
import useMakeItSold from '../hooks/FloorPlans/useMakeItSold';
import {formatDate, sqftToSqm, sqmToSqft} from '../Helpers/CommonHelpers';
import LoadingModal from '../components/Modals/LoadingModal';
import {
  sanitizeInputFlootingNumber,
  sanitizeInputNumber,
} from '../Helpers/SanitizationHelpers';

const Form_2 = ({SelectedFlat, SetType, getData}) => {
  const {
    LoadingVisible,
    formData,
    formDataError,
    handleInputChange,
    handleNextFocus,
    handleSubmit,
    inputRefs,
  } = useMakeItSold({SelectedFlat, SetType, getData});
  return (
    <>
      <KeyboardAvoidingWrapper>
        <SizedView style={styles_1.HorizontalLine} />
        <View style={styles_3.Padding}>
          <SizedView height={responsiveHeightPixel(22)} />

          <Text_Input_1
            FormObjName="MobileNumber"
            Title={'Mobile Number (broker)'}
            Placeholder={'Enter Mobile Number'}
            TextLimit={10}
            keyboardType={'numeric'}
            handleInputChange={handleInputChange}
            Value={formData.MobileNumber}
            Error={formDataError.MobileNumber}
            inputRef={inputRefs[0]}
            onSubmitEditing={() => handleNextFocus(0)}
          />
          <SizedView height={responsiveHeightPixel(18)} />
          <Text_Input_1
            FormObjName="OwnerName"
            Title={'Owner Name'}
            Placeholder={'Enter owner name'}
            handleInputChange={handleInputChange}
            Value={formData.OwnerName}
            Error={formDataError.OwnerName}
            inputRef={inputRefs[1]}
            onSubmitEditing={() => handleNextFocus(1)}
          />
          <SizedView height={responsiveHeightPixel(18)} />
          <Text_Input_1
            FormObjName="DealDate"
            Title={'Deal Date'}
            Placeholder={'--- please select ---'}
            onCalender={() => {}}
            Editable={false}
            handleInputChange={handleInputChange}
            Value={formatDate(formData.DealDate)}
            Error={formDataError.DealDate}
          />
          <SizedView height={responsiveHeightPixel(18)} />
          <Text_Input_1
            FormObjName="Deal"
            Title={'Price (sq.ft)'}
            Placeholder={'Enter Price (sq.ft)'}
            keyboardType={'numeric'}
            handleInputChange={handleInputChange}
            Value={formData.Deal}
            Error={formDataError.Deal}
            inputRef={inputRefs[2]}
            onSubmitEditing={() => handleNextFocus(2)}
          />
          <SizedView height={responsiveHeightPixel(18)} />
          <Text_Input_1
            FormObjName="AreaM"
            Title={'Area (sq.m)'}
            Placeholder={'Enter area (in sq.m)'}
            keyboardType={'numeric'}
            handleInputChange={(name, value) => {
              handleInputChange(name, value);
              handleInputChange('AreaFT', sqmToSqft(value));
            }}
            Value={formData.AreaM}
            Error={formDataError.AreaM}
            inputRef={inputRefs[3]}
            onSubmitEditing={() => handleNextFocus(3)}
            sanitizationFunction={sanitizeInputFlootingNumber}
          />
          <SizedView height={responsiveHeightPixel(18)} />
          <Text_Input_1
            FormObjName="AreaFT"
            Title={'Area (sq.ft)'}
            Placeholder={'Enter area (in sq.ft)'}
            keyboardType={'numeric'}
            handleInputChange={(name, value) => {
              handleInputChange(name, value);
              handleInputChange('AreaM', sqftToSqm(value));
            }}
            Value={formData.AreaFT}
            Error={formDataError.AreaFT}
            inputRef={inputRefs[4]}
            onSubmitEditing={() => handleNextFocus(4)}
            sanitizationFunction={sanitizeInputFlootingNumber}
          />
          <SizedView height={responsiveHeightPixel(18)} />
          {/* <Text_Input_1
            FormObjName="Total"
            Title={'Kharedi Amount'}
            Placeholder={'Enter total'}
            keyboardType={'numeric'}
            handleInputChange={handleInputChange}
            Value={formData.Total}
            Error={formDataError.Total}
            inputRef={inputRefs[5]}
            onSubmitEditing={() => handleNextFocus(5)}
          />
          <SizedView height={responsiveHeightPixel(18)} /> */}
          <Text_Input_1
            FormObjName="TokenAmount"
            Title={'Token Amount'}
            Placeholder={'Enter Token Amount'}
            keyboardType={'numeric'}
            handleInputChange={handleInputChange}
            Value={formData.TokenAmount}
            Error={formDataError.TokenAmount}
            inputRef={inputRefs[5]}
            onSubmitEditing={() => handleNextFocus(5)}
          />
          <SizedView height={responsiveHeightPixel(18)} />
          <Text_Input_1
            FormObjName="ESSARDate"
            Title={'ESSAR Date'}
            Placeholder={'--- please select ESSAR date ---'}
            onCalender={() => {}}
            Editable={false}
            handleInputChange={handleInputChange}
            Value={formatDate(formData.ESSARDate)}
            Error={formDataError.ESSARDate}
          />
          <SizedView height={responsiveHeightPixel(18)} />
          {/* <Text_Input_1
            FormObjName="ESSARAmount"
            Title={'ESSAR Amount'}
            Placeholder={'Enter ESSAR amount'}
            TextLimit={10}
            keyboardType={'numeric'}
            handleInputChange={handleInputChange}
            Value={formData.ESSARAmount}
            Error={formDataError.ESSARAmount}
            inputRef={inputRefs[7]}
            onSubmitEditing={() => handleNextFocus(7)}
          />
          <SizedView height={responsiveHeightPixel(18)} />
          <Text_Input_1
            FormObjName="ExtendedESSAR"
            Title={'Extended ESSAR'}
            Placeholder={'Enter Extended ESSAR'}
            handleInputChange={handleInputChange}
            Value={formData.ExtendedESSAR}
            Error={formDataError.ExtendedESSAR}
            inputRef={inputRefs[8]}
            onSubmitEditing={() => handleNextFocus(8)}
          />
          <SizedView height={responsiveHeightPixel(18)} />

          <Text_Input_1
            FormObjName="KharediDate"
            Title={'Kharedi Date'}
            Placeholder={'--- please select kharedi date ---'}
            onCalender={() => {}}
            Editable={false}
            handleInputChange={handleInputChange}
            Value={formatDate(formData.KharediDate)}
            Error={formDataError.KharediDate}
          />
          <SizedView height={responsiveHeightPixel(18)} /> */}
          <Text_Input_1
            FormObjName="KharediAmount"
            Title={'Kharedi Amount'}
            Placeholder={'Enter kharedi amount'}
            // keyboardType={'numeric'}
            handleInputChange={handleInputChange}
            Value={`${formData.AreaFT * formData.Deal || ''}`}
            // Error={formDataError.KharediAmount}
            Editable={false}
            // inputRef={inputRefs[6]}
            // onSubmitEditing={() => handleNextFocus(6)}
          />
          <SizedView height={responsiveHeightPixel(18)} />
        </View>
        <TextButton
          onPress={handleSubmit}
          TextData={'Make It Sold'}
          ButtonStyle={[
            WideButtonStyles.ButtonStyleAbsolute,
            {
              position: null,
              bottom: null,
              marginBottom: responsiveHeightPixel(20),
            },
          ]}
          TextStyle={{color: '#FFFFFF'}}
        />
        {LoadingVisible ? <LoadingModal isLoading={LoadingVisible} /> : null}
      </KeyboardAvoidingWrapper>
    </>
  );
};

export default Form_2;
