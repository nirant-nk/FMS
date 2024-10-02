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

import {
  CustomeText_10pt,
  CustomeText_18pt,
} from '../../common_components/TextComponents/CustomeText';
import TextButton from '../../common_components/Buttons/TextButton';
import SizedView from '../../common_components/SizedBox/SizedView';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import {styles_1} from '../../common_components/Entrie_1';
import TextIconButton from '../../common_components/Buttons/TextIconButton';
import Icons from '../../../assets/Icons/Icons';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import useAddDealAttachment from '../../hooks/useAddDealAttachment';
import DocumentPicker from 'react-native-document-picker';
import {ErrorMSG} from '../../common_components/TextInputs/Text_Input_1';
import LoadingComponent from '../../common_components/LoadingComponent';
import LoadingModal from './LoadingModal';

const AddDealAttachmentModal = ({visible, onRequestClose, Title, getData}) => {
  const {
    formData,
    formDataError,
    handleInputChange,
    handleSubmit,
    LoadingVisible,
  } = useAddDealAttachment(onRequestClose, getData);

  const navigation = useNavigation();
  const ViewRef = useRef();
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
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View ref={ViewRef} style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              <CustomeText_18pt TextData={Title} style={styles_1.BoldText} />
              <SizedView height={responsiveHeightPixel(25)} />

              <TextIconButton
                onPress={() => onDocumentSelect('DealAttachment')}
                TextData={'Upload'}
                Icon={
                  <Icons.Feather
                    name={'upload'}
                    color={'black'}
                    size={responsiveWidth(5)}
                  />
                }
              />
              {formData?.DealAttachment?.name ? (
                <CustomeText_10pt
                  TextData={formData?.DealAttachment?.name}
                  style={{marginTop: responsiveHeightPixel(2)}}
                />
              ) : null}
              <ErrorMSG Error={formDataError.DealAttachment} marginTop={5} />
              <SizedView height={responsiveHeightPixel(71)} />
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
  },
  ButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    columnGap: responsiveWidthPixel(8),
  },
});

export default AddDealAttachmentModal;
