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

import {CustomeText_18pt} from '../../common_components/TextComponents/CustomeText';
import TextButton from '../../common_components/Buttons/TextButton';
import SizedView from '../../common_components/SizedBox/SizedView';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import Text_Input_1 from '../../common_components/TextInputs/Text_Input_1';
import useAddImportantDates from '../../hooks/PersonalBookApis/useAddImportantDates';
import {formatDate} from '../../Helpers/CommonHelpers';
import LoadingModal from './LoadingModal';

const AddImportantDateModal = ({visible, onRequestClose, onRefresh}) => {
  const navigation = useNavigation();
  const ViewRef = useRef();
  const {
    LoadingVisible,
    formData,
    formDataError,
    handleInputChange,
    handleNextFocus,
    handleSubmit,
    inputRefs,
  } = useAddImportantDates(onRequestClose, onRefresh);
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
                FormObjName="Date"
                Title={'Select Date'}
                Placeholder={'--- please select ---'}
                onCalender={() => {}}
                Editable={false}
                handleInputChange={handleInputChange}
                Value={formatDate(formData.Date)}
                Error={formDataError.Date}
                minDate={Date.now()}
              />
              <SizedView height={responsiveHeightPixel(18)} />
              <Text_Input_1
                FormObjName="Work"
                Title={'Which Work'}
                Placeholder={'Enter which work'}
                handleInputChange={handleInputChange}
                Value={formData.Work}
                Error={formDataError.Work}
                // TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
                // style={styles_3.DiscriptionView}
              />
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
                  TextData={'Add Entry'}
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
});

export default AddImportantDateModal;
