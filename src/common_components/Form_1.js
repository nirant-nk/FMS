import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import Header_2 from '../common_screens/Header_2';
import KeyboardAvoidingWrapper from '../wrappers/KeyboardAvoidingWrapper';
import SizedView from '../common_components/SizedBox/SizedView';
import {
  CustomeText_10pt,
  CustomeText_18pt,
} from '../common_components/TextComponents/CustomeText';
import Text_Input_1, {
  ErrorMSG,
} from '../common_components/TextInputs/Text_Input_1';
import TextIconButton from '../common_components/Buttons/TextIconButton';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import TextButton from '../common_components/Buttons/TextButton';
import DocumentPicker from 'react-native-document-picker';
import LoadingModal from '../components/Modals/LoadingModal';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
const Form_1 = ({
  Title,
  Placeholders,
  ButtonTitle,
  formData,
  formDataError,
  handleInputChange,
  handleSubmit,
  LoadingVisible,
  handleNextFocus,
  inputRefs,
}) => {
  const onDocumentSelect = async FormObjName => {
    try {
      const doc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });
      // const doc = await DocumentPicker.pick({
      //   type: [DocumentPicker.types.pdf],
      //   allowMultiSelection: true
      // });
      // const doc = await DocumentPicker.pickMultiple({
      //   type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      // });
      console.log(doc);
      handleInputChange(FormObjName, doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err))
        console.log('User cancelled the upload', err);
      else console.log(err);
    }
  };

  return (
    <>
      <ImageHeaderScrollView
        maxHeight={responsiveHeightPixel(120)}
        minHeight={0}
        renderTouchableFixedForeground={() => <Header_2 Title={Title} />}>
        <TriggeringView style={{backgroundColor: '#ECAF07'}}>
          <KeyboardAvoidingWrapper style={styles.MainStyle}>
            <View style={styles.subContainer}>
              <SizedView height={responsiveHeightPixel(37)} />
              <CustomeText_18pt
                TextData={'Contact Info'}
                style={[styles.BoldText, styles.Padding]}
              />
              <SizedView height={responsiveHeightPixel(18)} />
              <View style={styles.FormContainer}>
                <SizedView height={responsiveHeightPixel(15)} />

                <Text_Input_1
                  FormObjName="SiteName"
                  Title={Placeholders.textInput1.Title}
                  Placeholder={Placeholders.textInput1.Placeholder}
                  handleInputChange={handleInputChange}
                  Value={formData.SiteName}
                  Error={formDataError.SiteName}
                  inputRef={inputRefs[0]}
                  onSubmitEditing={() => handleNextFocus(0)}
                />
                <SizedView height={responsiveHeightPixel(18)} />

                <Text_Input_1
                  FormObjName="PhoneNumber"
                  Title={'Phone Number'}
                  Placeholder={'Enter Phone Number'}
                  TextLimit={10}
                  keyboardType={'numeric'}
                  handleInputChange={handleInputChange}
                  Value={formData.PhoneNumber}
                  Error={formDataError.PhoneNumber}
                  inputRef={inputRefs[1]}
                  onSubmitEditing={() => handleNextFocus(1)}
                />
                <SizedView height={responsiveHeightPixel(18)} />

                <Text_Input_1
                  FormObjName="Email"
                  Title={'Email'}
                  Placeholder={'Enter email'}
                  keyboardType={'email-address'}
                  handleInputChange={handleInputChange}
                  Value={formData.Email}
                  Error={formDataError.Email}
                  inputRef={inputRefs[2]}
                  onSubmitEditing={() => handleNextFocus(2)}
                />
                <SizedView height={responsiveHeightPixel(18)} />

                <Text_Input_1
                  FormObjName="Location"
                  Title={'Location'}
                  Placeholder={'Enter location'}
                  handleInputChange={handleInputChange}
                  Value={formData.Location}
                  Error={formDataError.Location}
                  inputRef={inputRefs[3]}
                  onSubmitEditing={() => handleNextFocus(3)}
                />
                <SizedView height={responsiveHeightPixel(15)} />
              </View>
              <SizedView height={responsiveHeightPixel(14)} />
              <SizedView style={styles.HorizontalLine} />
              <SizedView height={responsiveHeightPixel(24)} />
              <View style={styles.Padding}>
                <CustomeText_18pt
                  TextData={Placeholders.uploadTitle1}
                  style={[styles.BoldText]}
                />
                <SizedView height={responsiveHeightPixel(14)} />
                <TextIconButton
                  onPress={() => onDocumentSelect('FinalContract')}
                  TextData={'Upload'}
                  Icon={
                    <Icons.Feather
                      name={'upload'}
                      color={'black'}
                      size={responsiveWidth(5)}
                    />
                  }
                />
                {formData?.FinalContract?.name ? (
                  <CustomeText_10pt
                    TextData={formData?.FinalContract?.name}
                    style={{marginTop: responsiveHeightPixel(2)}}
                  />
                ) : null}
                <ErrorMSG Error={formDataError.FinalContract} marginTop={5} />
                <SizedView height={responsiveHeightPixel(22)} />

                <Text_Input_1
                  FormObjName="DealAmount"
                  Title={'Deal Amount'}
                  Placeholder={'Enter deal amount'}
                  keyboardType={'numeric'}
                  handleInputChange={handleInputChange}
                  Value={formData.DealAmount}
                  Error={formDataError.DealAmount}
                  inputRef={inputRefs[4]}
                  onSubmitEditing={() => handleNextFocus(4)}
                />
                <SizedView height={responsiveHeightPixel(22)} />
              </View>
              <SizedView style={styles.HorizontalLine} />
              <SizedView height={responsiveHeightPixel(100)} />

              {/* <View style={styles.Padding}>
                <CustomeText_18pt
                  TextData={Placeholders.uploadTitle2}
                  style={[styles.BoldText]}
                />
                <SizedView height={responsiveHeightPixel(14)} />
                <TextIconButton
                  onPress={() => onDocumentSelect('ExtendedContract')}
                  TextData={'Upload'}
                  Icon={
                    <Icons.Feather
                      name={'upload'}
                      color={'black'}
                      size={responsiveWidth(5)}
                    />
                  }
                />
                {formData?.ExtendedContract?.name ? (
                  <CustomeText_10pt
                    TextData={formData?.ExtendedContract?.name}
                    style={{marginTop: responsiveHeightPixel(2)}}
                  />
                ) : null}
                <ErrorMSG
                  Error={formDataError.ExtendedContract}
                  marginTop={5}
                />

                <SizedView height={responsiveHeightPixel(110)} />
              </View> */}
            </View>
          </KeyboardAvoidingWrapper>
        </TriggeringView>
      </ImageHeaderScrollView>
      <TextButton
        onPress={handleSubmit}
        TextData={ButtonTitle}
        ButtonStyle={WideButtonStyles.ButtonStyleAbsolute}
        TextStyle={{color: '#FFFFFF'}}
      />

      <LoadingModal isLoading={LoadingVisible} />
    </>
  );
};

export default Form_1;

export const WideButtonStyles = StyleSheet.create({
  ButtonStyleAbsolute: {
    backgroundColor: '#1E1E1E',
    width: '93%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: responsiveHeight(4),
  },
});

const styles = StyleSheet.create({
  MainStyle: {
    paddingTop: responsiveHeightPixel(0),
  },
  subContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
  },
  BoldText: {
    fontWeight: 'bold',
  },
  Padding: {
    paddingHorizontal: responsiveWidthPixel(16),
  },
  FormContainer: {
    marginHorizontal: responsiveWidthPixel(8),
    paddingHorizontal: responsiveWidthPixel(8),
    backgroundColor: '#FFFCF2',
    borderRadius: 13,
  },
  HorizontalLine: {
    backgroundColor: '#E6E6E6',
    height: 3,
    width: '100%',
  },
});
