import React, {useRef} from 'react';
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
import {BlurView} from '@react-native-community/blur';
import LoadingModal from './LoadingModal';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Text_Input_1 from '../../common_components/TextInputs/Text_Input_1';
import useAddDocumentFolder from '../../hooks/useAddDocumentFolder';

const AddDocumentFolderModal = ({visible, onRequestClose, onRefresh}) => {
  const ViewRef = useRef();
  const {
    LoadingVisible,
    formData,
    formDataError,
    handleInputChange,
    handleSubmit,
  } = useAddDocumentFolder(onRequestClose, onRefresh);

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
                FormObjName="FolderName"
                Title={'Folder Name'}
                Placeholder={'Enter Folder name'}
                handleInputChange={handleInputChange}
                Value={formData.FolderName}
                Error={formDataError.FolderName}
              />

              <SizedView height={responsiveHeightPixel(80)} />
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
                  TextData={'Add'}
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

export default AddDocumentFolderModal;
