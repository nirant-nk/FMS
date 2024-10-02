import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';

import TextButton from '../../common_components/Buttons/TextButton';
import SizedView from '../../common_components/SizedBox/SizedView';
import {useNavigation, useRoute} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import DocumentUpload from '../../common_components/DocumentUpload';
import Text_Input_1, {
  ErrorMSG,
} from '../../common_components/TextInputs/Text_Input_1';
import {useMyContext} from '../../network_storage_store/context_store/MyProvider';
import useEditDocument from '../../hooks/DocumentHooks/useEditDocument';
import DocumentPicker from 'react-native-document-picker';
import {getFileTypeAndName} from '../../Helpers/CommonHelpers';
import LoadingModal from './LoadingModal';

const UpdateSingleDocumentAttachment = ({
  visible,
  onRequestClose,
  getData,
  url,
}) => {
  const route = useRoute();
  const {DocumentID, DocumentName} = route.params;
  const {CurrentDocumentHolderDetails} = useMyContext();
  const {
    formData,
    formDataError,
    handleInputChange,
    handleSubmit,
    LoadingVisible,
  } = useEditDocument(DocumentID, onRequestClose, getData);

  //   const {Stats} = useGetDocumentCivilBook('aadhar');
  //   console.warn('Stats in add', Stats.document);
  const navigation = useNavigation();

  const ViewRef = useRef();
  const [Information, SetInformation] = useState({});
  const getInfo = () => {
    const res = getFileTypeAndName(url);
    SetInformation(res);
    console.log(`sdsads ${res.name}`);
  };
  useEffect(() => {
    getInfo();
  }, []);

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
              {/* <SizedView height={responsiveHeightPixel(24)} /> */}

              <Text_Input_1
                FormObjName="Name"
                Title={'Site'}
                Placeholder={CurrentDocumentHolderDetails?.current?.folder_name}
                TextLimit={10}
                keyboardType={'default'}
                Editable={false}
                // handleInputChange={handleInputChange}
                // Value={formData.Discription}
                // TextArea
                // Error={formDataError.Discription}
                // TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
                // style={styles.DiscriptionView}
              />
              <SizedView height={responsiveHeightPixel(31)} />
              <DocumentUpload
                onPress={() => onDocumentSelect('Attachment')}
                TextData={`Add ${DocumentName}`}
                pdfName={formData?.Attachment?.name || Information.name}
              />

              <ErrorMSG Error={formDataError.Attachment} marginTop={5} />

              <SizedView height={responsiveHeightPixel(65)} />
              <View style={styles.ButtonsContainer}>
                <TextButton
                  onPress={onRequestClose}
                  TextData={'Cancel'}
                  ButtonStyle={{
                    backgroundColor: '#DFDFDF',
                    width: responsiveWidthPixel(143),
                  }}
                  TextStyle={{color: '#000000'}}
                />
                <TextButton
                  onPress={handleSubmit}
                  TextData={'Add Data'}
                  ButtonStyle={{
                    backgroundColor: '#1E1E1E',
                    width: responsiveWidthPixel(143),
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
    // alignItems: 'center',
  },
  ButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    columnGap: responsiveWidthPixel(8),
  },
});

export default UpdateSingleDocumentAttachment;
