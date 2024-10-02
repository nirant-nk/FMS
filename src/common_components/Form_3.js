import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import SizedView from './SizedBox/SizedView';
import Text_Input_1, {ErrorMSG} from './TextInputs/Text_Input_1';
import TextButton from './Buttons/TextButton';
import {WideButtonStyles} from './Form_1';
import {styles_1} from './Entrie_1';
import {styles_3} from '../screens/AddContractIndividualExpensesScreen';
import {formatDate} from '../Helpers/CommonHelpers';
import LoadingModal from '../components/Modals/LoadingModal';
import useAddExtendedEssar from '../hooks/FloorPlans/useAddExtendedEssar';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CustomeText_10pt, CustomeText_14pt} from './TextComponents/CustomeText';
import Radio_Button from './TextInputs/Radio_Button';
import {TextIconButtonUploadSingleImage} from './Buttons/TextIconButton';
import Icons from '../../assets/Icons/Icons';

const PaidByStatus = [
  {
    id: 1,
    option: 'Cash',
  },
  {
    id: 2,
    option: `Check`,
  },
  {
    id: 3,
    option: `UPI`,
  },
];
const Form_3 = ({SelectedFlat, SetType, getData}) => {
  const {
    LoadingVisible,
    formData,
    formDataError,
    handleInputChange,
    handleNextFocus,
    handleSubmit,
    inputRefs,
  } = useAddExtendedEssar({SelectedFlat, SetType, getData});
  return (
    <>
      <KeyboardAvoidingWrapper>
        <SizedView style={styles_1.HorizontalLine} />
        <View style={styles_3.Padding}>
          <SizedView height={responsiveHeightPixel(22)} />

          <Text_Input_1
            FormObjName="Date"
            Title={'Date'}
            Placeholder={'--- please select ---'}
            onCalender={() => {}}
            Editable={false}
            handleInputChange={handleInputChange}
            Value={formatDate(formData.Date)}
            Error={formDataError.Date}
          />
          <SizedView height={responsiveHeightPixel(18)} />
          <Text_Input_1
            FormObjName="Amount"
            Title={'Amount'}
            Placeholder={'Enter Amount'}
            keyboardType={'numeric'}
            handleInputChange={handleInputChange}
            Value={formData.Amount}
            Error={formDataError.Amount}
            inputRef={inputRefs[0]}
            onSubmitEditing={() => handleNextFocus(0)}
          />
          <SizedView height={responsiveHeightPixel(25)} />
          <View
            style={[
              styles_3.RowContainer,
              {
                justifyContent: 'space-between',
                columnGap: responsiveWidthPixel(5),
              },
            ]}>
            <CustomeText_14pt
              TextData={'Amount paid by'}
              style={[styles_3.BoldText]}
            />

            <SizedView />
            {PaidByStatus.map((item, index) => (
              <Radio_Button
                item={item}
                textStyle={{fontSize: responsiveFontSize(1.7)}}
                selectedId={formData.PaidBy}
                onSelect={id => {
                  if (id == formData.PaidBy) {
                    handleInputChange('PaidBy', '');
                  } else {
                    handleInputChange('PaidBy', id);
                  }
                }}
              />
            ))}
          </View>
          <ErrorMSG
            Error={formDataError.PaidBy}
            marginTop={responsiveHeightPixel(10)}
          />

          <SizedView height={responsiveHeightPixel(25)} />

          <Text_Input_1
            FormObjName="ReceiverName"
            Title={'Receiver Name'}
            Placeholder={'Enter Receiver name'}
            handleInputChange={handleInputChange}
            Value={formData.ReceiverName}
            Error={formDataError.ReceiverName}
            inputRef={inputRefs[1]}
            onSubmitEditing={() => handleNextFocus(1)}
          />
          <SizedView height={responsiveHeightPixel(18)} />

          <Text_Input_1
            FormObjName="Remark"
            Title={'Remark'}
            Placeholder={'Enter Remark'}
            handleInputChange={handleInputChange}
            Value={formData.Remark}
            Error={formDataError.Remark}
            inputRef={inputRefs[2]}
            onSubmitEditing={() => handleNextFocus(2)}
          />
          <SizedView height={responsiveHeightPixel(18)} />

          <View
            style={[
              styles_3.FormContainer,
              styles_1.RowContainer,
              {width: null, marginHorizontal: 0},
            ]}>
            <View>
              <SizedView height={responsiveHeightPixel(10)} />

              <CustomeText_14pt TextData={'Attachment'} />
              <SizedView height={responsiveHeightPixel(9)} />

              <TextIconButtonUploadSingleImage
                FormObjName={'Photo'}
                handleInputChange={handleInputChange}
                TextData={'Upload'}
                Icon={
                  <Icons.Feather
                    name={'upload'}
                    color={'black'}
                    size={responsiveWidth(5)}
                  />
                }
              />

              <SizedView height={responsiveHeightPixel(9)} />

              <CustomeText_14pt
                TextData={'(upload the photo of bill)'}
                style={formDataError.Photo ? {color: 'red'} : null}
              />
              <SizedView height={responsiveHeightPixel(20)} />
            </View>
            <View>
              {formData?.Photo?.length ? (
                <View>
                  <Image
                    source={formData.Photo[0]}
                    style={styles_3.ImageStyle}></Image>
                  <TouchableOpacity
                    onPress={() => {
                      handleInputChange('Photo', []);
                    }}
                    style={{
                      position: 'absolute',
                      top: responsiveWidth(-1),
                      right: responsiveWidth(-1),
                      zIndex: 1,
                      backgroundColor: 'white',
                      borderRadius: 10,
                    }}>
                    <Icons.Entypo
                      name={'circle-with-cross'}
                      color={'black'}
                      size={responsiveWidth(3.5)}
                    />
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </View>

          <SizedView height={responsiveHeightPixel(18)} />
        </View>
        <TextButton
          onPress={handleSubmit}
          TextData={'Add'}
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

export default Form_3;
