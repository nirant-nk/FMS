import React from 'react';
import { View } from 'react-native';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import { responsiveHeightPixel } from '../Helpers/ResponsivePixel';
import TextButton from '../common_components/Buttons/TextButton';
import { WideButtonStyles } from '../common_components/Form_1';
import SizedView from '../common_components/SizedBox/SizedView';
import Dropdown_1 from '../common_components/TextInputs/Dropdown_1';
import Text_Input_1 from '../common_components/TextInputs/Text_Input_1';
import Header_2 from '../common_screens/Header_2';
import LoadingModal from '../components/Modals/LoadingModal';
import useAddKharcha from '../hooks/PersonalBook/useAddKharcha';
import DefaultWrap from '../wrappers/DefaultWrap';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import { styles_3 } from './AddContractIndividualExpensesScreen';
const AddKharchaScreen = ({route}) => {
  const type = route?.params?.type;

  const {
    LoadingVisible,
    formData,
    formDataError,
    handleInputChange,
    handleSubmit,
  } = useAddKharcha();
  return (
    <DefaultWrap>
      <ImageHeaderScrollView
        maxHeight={responsiveHeightPixel(120)}
        minHeight={0}
        renderTouchableFixedForeground={() => (
          <Header_2 Title={'Add Entries'} />
        )}>
        <TriggeringView style={{backgroundColor: '#ECAF07'}}>
          <KeyboardAvoidingWrapper style={styles_3.MainStyle}>
            <View style={styles_3.subContainer}>
              <SizedView height={responsiveHeightPixel(37)} />
              <View style={styles_3.Padding}>
                <Text_Input_1
                  FormObjName="Name"
                  Title={'Source Name'}
                  Placeholder={'Enter Source Name'}
                  handleInputChange={handleInputChange}
                  Value={formData.Name}
                  Error={formDataError.Name}
                />
                <SizedView height={responsiveHeightPixel(18)} />
                <Text_Input_1
                  FormObjName="Amount"
                  Title={'Amount'}
                  Placeholder={'Enter amount'}
                  TextLimit={10}
                  keyboardType={'numeric'}
                  handleInputChange={handleInputChange}
                  Value={formData.Amount}
                  Error={formDataError.Amount}
                />
                <SizedView height={responsiveHeightPixel(18)} />
                {type == 'Investments & Savings' ||
                type == 'Loans Section' ||
                type == 'Other Sources' ? (
                  <>
                    <Text_Input_1
                      FormObjName="Interest"
                      Title={'Interest'}
                      Placeholder={'Enter Interest'}
                      keyboardType={'numeric'}
                      handleInputChange={handleInputChange}
                      Value={formData.Interest}
                      Error={formDataError.Interest}
                    />
                    <SizedView height={responsiveHeightPixel(18)} />
                    <Text_Input_1
                      FormObjName="Frequency"
                      Title={'Frequency'}
                      Placeholder={'Enter Frequency (in Months)'}
                      keyboardType={'numeric'}
                      handleInputChange={handleInputChange}
                      Value={formData.Frequency}
                      Error={formDataError.Frequency}
                    />
                    <SizedView height={responsiveHeightPixel(18)} />
                  </>
                ) : null}
                {type == 'Other Sources' ? (
                  <>
                    <Dropdown_1
                      NameField={'name'}
                      IDField={'id'}
                      FormObjName={'Type'}
                      Title={'Type'}
                      Placeholder={'Select Type'}
                      handleInputChange={handleInputChange}
                      SelectedOptionID={formData.TypeID}
                      data={[
                        {name: 'Credit', id: 'Credit'},
                        {name: 'Debit', id: 'Debit'},
                      ]}
                      Error={formDataError.Type}
                    />
                    <SizedView height={responsiveHeightPixel(18)} />
                  </>
                ) : null}
              </View>
            </View>
          </KeyboardAvoidingWrapper>
        </TriggeringView>
      </ImageHeaderScrollView>
      <TextButton
        onPress={handleSubmit}
        TextData={'Add Entry'}
        ButtonStyle={WideButtonStyles.ButtonStyleAbsolute}
        TextStyle={{color: '#FFFFFF'}}
      />

      <LoadingModal isLoading={LoadingVisible} />
    </DefaultWrap>
  );
};

export default AddKharchaScreen;
