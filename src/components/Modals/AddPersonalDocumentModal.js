import React, {useRef} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';

import {
  CustomeText_10pt,
  CustomeText_14pt,
  CustomeText_18pt,
} from '../../common_components/TextComponents/CustomeText';
import TextButton from '../../common_components/Buttons/TextButton';
import SizedView from '../../common_components/SizedBox/SizedView';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import Text_Input_1, {
  ErrorMSG,
} from '../../common_components/TextInputs/Text_Input_1';
import {styles_4} from '../../screens/AddIndividualCreditsScreen';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {IMAGES} from '../../../assets/constants/ImageConstant';
import TextIconButton from '../../common_components/Buttons/TextIconButton';
import Icons from '../../../assets/Icons/Icons';
import useAddPersonalDocument from '../../hooks/useAddPersonalDocument';
import DocumentPicker from 'react-native-document-picker';
import LoadingModal from './LoadingModal';

const AddPersonalDocumentModal = ({visible, onRequestClose, onRefresh}) => {
  const navigation = useNavigation();
  const ViewRef = useRef();
  const {
    formData,
    formDataError,
    handleInputChange,
    handleNextFocuss,
    handleSubmit,
    LoadingVisible,
  } = useAddPersonalDocument(onRequestClose, onRefresh);

  const onDocumentSelect = async FormObjName => {
    try {
      const doc = await DocumentPicker.pickSingle({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.images,
          DocumentPicker.types.video,
        ],
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
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View ref={ViewRef} style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              <Text_Input_1
                FormObjName="DocumentName"
                Title={'Document Name'}
                Placeholder={'Enter document name'}
                handleInputChange={handleInputChange}
                Value={formData.DocumentName}
                Error={formDataError.DocumentName}
                // TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
                // style={styles_3.DiscriptionView}
              />
              <SizedView height={responsiveHeightPixel(21)} />

              <View style={[styles_4.FormContainer, {width: '100%'}]}>
                <SizedView height={responsiveHeightPixel(10)} />

                <CustomeText_14pt TextData={'File Attachment'} />
                <View
                  style={[
                    styles_4.RowContainer,
                    {justifyContent: 'space-between'},
                  ]}>
                  <TextIconButton
                    onPress={() => onDocumentSelect('File')}
                    TextData={'Upload'}
                    Icon={
                      <Icons.Feather
                        name={'upload'}
                        color={'black'}
                        size={responsiveWidth(5)}
                      />
                    }
                  />
                  {formData?.File?.name ? (
                    <CustomeText_10pt
                      TextData={formData?.File?.name}
                      style={{marginTop: responsiveHeightPixel(2)}}
                    />
                  ) : null}
                  <View>
                    {formData.File.length ? (
                      <View>
                        <Image
                          source={formData.File[0]}
                          style={styles.ImageStyle}></Image>
                        <TouchableOpacity
                          onPress={() => {
                            handleInputChange('File', []);
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
                <CustomeText_14pt
                  TextData={'(upload jpg/pdf of file)'}
                  style={{color: formDataError.File ? 'red' : 'black'}}
                />
                <SizedView height={responsiveHeightPixel(20)} />
              </View>

              <SizedView height={responsiveHeightPixel(46)} />
              <View style={styles.ButtonsContainer}>
                <TextButton
                  onPress={onRequestClose}
                  TextData={'Cancel'}
                  ButtonStyle={{
                    backgroundColor: '#DFDFDF',
                    width: responsiveWidthPixel(143),
                    height: responsiveHeightPixel(48),
                  }}
                  TextStyle={{color: '#000000'}}
                />
                <TextButton
                  onPress={handleSubmit}
                  TextData={'Add Document'}
                  ButtonStyle={{
                    backgroundColor: '#1E1E1E',
                    width: responsiveWidthPixel(143),
                    height: responsiveHeightPixel(48),
                  }}
                  TextStyle={{color: '#FFFFFF'}}
                />
              </View>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
        {ViewRef && visible ? (
          <BlurView
            style={[StyleSheet.absoluteFill, {zIndex: -1}]}
            viewRef={ViewRef}
            blurType="light"
            blurAmount={5}
            blurRadius={5}
          />
        ) : null}
      </Modal>
      <LoadingModal isLoading={LoadingVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    width: responsiveWidthPixel(321),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 20,
    paddingHorizontal: responsiveWidthPixel(15),
    paddingVertical: responsiveHeightPixel(23),
    alignItems: 'center',
  },
  ButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    columnGap: responsiveWidthPixel(8),
  },
  ImageStyle: {
    height: responsiveHeightPixel(55),
    width: responsiveHeightPixel(50),
    borderRadius: 5,
  },
});

export default AddPersonalDocumentModal;
