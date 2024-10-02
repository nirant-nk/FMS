import React, {useRef} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';

import TextButton from '../../common_components/Buttons/TextButton';
import SizedView from '../../common_components/SizedBox/SizedView';
import {BlurView} from '@react-native-community/blur';
import useAddAdharSatBaraSaleDeed from '../../hooks/useAddAdharSatBaraSaleDeed';
import LoadingModal from './LoadingModal';
import DocumentPicker from 'react-native-document-picker';
import DocumentUploadWithName from '../../common_components/DocumentUploadWithName';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Text_Input_1 from '../../common_components/TextInputs/Text_Input_1';
import {useMyContext} from '../../network_storage_store/context_store/MyProvider';

const AddAgainstSiteModal = ({visible, onRequestClose, onRefresh}) => {
  const navigation = useNavigation();
  const ViewRef = useRef();
  const {CurrentDocumentHolderDetails} = useMyContext();

  const {
    LoadingVisible,
    handleSubmit,
    MultiForms,
    MultiFormsError,
    handleInputChangeMultiForms,
    handleRemoveMultiForm,
    handleAddMultiForms,
  } = useAddAdharSatBaraSaleDeed(onRequestClose, onRefresh);

  const onDocumentSelect = async (FormObjName, index) => {
    try {
      const doc = await DocumentPicker.pickSingle({
        type: [
          DocumentPicker.types.pdf,
          DocumentPicker.types.images,
          DocumentPicker.types.video,
        ],
      });
      handleInputChangeMultiForms(index, FormObjName, doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err))
        console.log('User cancelled the upload', err);
      else console.log(err);
    }
  };

  if (!navigation?.isFocused()) {
    return null;
  }

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback
        // onPress={onRequestClose}
        >
          <View ref={ViewRef} style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              <Text_Input_1
                FormObjName="Name"
                Title={'Folder Name'}
                Placeholder={CurrentDocumentHolderDetails?.current?.folder_name}
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
              <ScrollView
                contentContainerStyle={{
                  // maxHeight: responsiveHeight(50),
                  paddingVertical: responsiveHeightPixel(10),
                }}>
                {MultiForms.map(
                  (singleDocument, index) => (
                    <DocumentUploadWithName
                      onCross={() => {
                        handleRemoveMultiForm(index);
                      }}
                      TextData={'Add Adhar Card'}
                      onPress={() => onDocumentSelect('DocumentFile', index)}
                      Error={MultiFormsError[index].DocumentFile}
                      SelectedFile={singleDocument.DocumentFile}
                      Text_Input_1Props={{
                        FormObjName: 'DocumentName',
                        Placeholder: `Enter Document ${index + 1} Name`,
                        handleInputChange: handleInputChangeMultiForms,
                        Value: singleDocument.DocumentName,
                        Error: MultiFormsError[index].DocumentName,
                        index,
                      }}
                    />
                  ),
                  [],
                )}
              </ScrollView>

              {/* <DocumentUploadWithName
                TextData={'Add 7/12'}
                onPress={() => onDocumentSelect('SatBara')}
                Error={formDataError.SatBara}
                SelectedFile={formData.SatBara}
              />
              <DocumentUploadWithName
                TextData={'Add Sale Deed'}
                onPress={() => onDocumentSelect('SaleDeed')}
                Error={formDataError.SaleDeed}
                SelectedFile={formData.SaleDeed}
              /> */}

              <SizedView height={responsiveHeightPixel(40)} />
              <TextButton
                onPress={handleAddMultiForms}
                TextData={'Add More Document'}
                ButtonStyle={{
                  backgroundColor: '#ECAF07',
                  width: '100%',
                  // elevation: 10,
                }}
                TextStyle={{color: 'white'}}
              />
              <SizedView height={responsiveHeightPixel(10)} />

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
                  TextData={'Add Documents'}
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
    maxHeight: responsiveHeight(75),
  },
  ButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    columnGap: responsiveWidthPixel(8),
  },
});

export default AddAgainstSiteModal;
