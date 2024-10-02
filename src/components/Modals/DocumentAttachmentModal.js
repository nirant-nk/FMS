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
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import DocumentUpload from '../../common_components/DocumentUpload';
import Text_Input_1 from '../../common_components/TextInputs/Text_Input_1';
import {styles_1} from '../../common_components/Entrie_1';

const DocumentAttachmentModal = ({
  visible,
  onRequestClose,
  Title,
  ShowSaatBara = true,
  ShowSaledeed = true,
}) => {
  const navigation = useNavigation();
  const ViewRef = useRef();

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
                FormObjName="Discription"
                Title={'Site'}
                Placeholder={'Gangane Layout'}
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
              <DocumentUpload TextData={'Add Adhar Card'} />
              {ShowSaatBara ? <DocumentUpload TextData={'Add 7/12'} /> : null}
              {ShowSaledeed ? (
                <DocumentUpload TextData={'Add Sale Deed'} />
              ) : null}
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
                  onPress={onRequestClose}
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

export default DocumentAttachmentModal;
