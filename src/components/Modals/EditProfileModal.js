import React, {useRef, useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  Image,
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
import {IMAGES} from '../../../assets/constants/ImageConstant';
import IconCircleButton from '../../common_components/Buttons/IconCircleButton';
import Icons from '../../../assets/Icons/Icons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import useEditProfile from '../../hooks/useEditProfile';
import useModal from '../../hooks/useModal';
import ImagePickerModal_1 from './ImagePickerModal_1';
import {useMyContext} from '../../network_storage_store/context_store/MyProvider';
import {imgPath} from '../../../assets/constants/NetworkImage';
import {sanitizeInputChar} from '../../Helpers/SanitizationHelpers';

const EditProfileModal = ({visible, onRequestClose, updateData}) => {
  const AllProps = useEditProfile(onRequestClose, updateData);
  const {
    handleInputChange,
    formData,
    formDataError,
    handleNextFocus,
    inputRefs,
    handleSubmit,
  } = AllProps;
  const ViewRef = useRef();

  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal(false);
  const {GlobalProfileData} = useMyContext();
  // console.warn('in edit', GlobalProfileData);
  const GlobalProfile = GlobalProfileData?.image
    ? {uri: imgPath + GlobalProfileData?.image}
    : null;
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
              <IconCircleButton
                ButtonStyle={styles.CrossButton}
                onPress={onRequestClose}
                Icon={
                  <Icons.Entypo
                    name={'cross'}
                    color={'white'}
                    size={responsiveWidth(6)}
                  />
                }
              />

              <View style={styles.ProfileContainer}>
                <Image
                  resizeMode="contain"
                  source={formData.ProfileImage || GlobalProfile || IMAGES.USER}
                  style={styles.ProfileImage}
                />
                <IconCircleButton
                  ButtonStyle={styles.AddButtonButton}
                  onPress={ImagePickerOpen}
                  Icon={
                    <Icons.Feather
                      name={'plus'}
                      color={'black'}
                      size={responsiveWidth(5)}
                    />
                  }
                />
              </View>
              <SizedView height={responsiveHeightPixel(50)} />

              <Text_Input_1
                inputRef={inputRefs[0]}
                onSubmitEditing={() => handleNextFocus(0)}
                FormObjName="Name"
                Title={'Name'}
                Placeholder={'Enter name'}
                handleInputChange={handleInputChange}
                Value={formData.Name}
                Error={formDataError.Name}
                sanitizationFunction={sanitizeInputChar}
                // TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
                // style={styles.DiscriptionView}
              />
              <SizedView height={responsiveHeightPixel(16)} />

              <Text_Input_1
                inputRef={inputRefs[1]}
                onSubmitEditing={() => handleNextFocus(1)}
                FormObjName="MobileNumber"
                Title={'Phone Number'}
                Placeholder={'Enter Phone Number'}
                TextLimit={10}
                keyboardType={'numeric'}
                handleInputChange={handleInputChange}
                Value={formData.MobileNumber}
                Error={formDataError.MobileNumber}
                Editable={false}
                // TextInputstyle={{paddingLeft: responsiveWidthPixel(5)}}
                // style={styles.DiscriptionView}
              />
              <SizedView height={responsiveHeightPixel(34)} />

              <TextButton
                onPress={handleSubmit}
                TextData={'Update'}
                ButtonStyle={{backgroundColor: '#1E1E1E', width: '100%'}}
                TextStyle={{color: '#FFFFFF'}}
              />
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

      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={ImagePickerVisible}
          onRequestClose={ImagePickerClose}
          FormObjName={'ProfileImage'}
          handleInputChange={handleInputChange}
          NumberOfImages={1}
        />
      ) : null}
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
  ProfileContainer: {
    backgroundColor: 'white',
    height: responsiveHeightPixel(92),
    width: responsiveHeightPixel(92),
    borderRadius: responsiveHeightPixel(92 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: -responsiveHeightPixel(92 / 2),
  },
  ProfileImage: {
    height: responsiveHeightPixel(82),
    width: responsiveHeightPixel(82),
    borderRadius: responsiveHeightPixel(82 / 2),
  },
  AddButtonButton: {
    backgroundColor: '#ECAF07',
    position: 'absolute',
    right: responsiveHeight(1),
    bottom: responsiveHeight(1),
    width: responsiveWidthPixel(22),
    height: responsiveWidthPixel(22),
    borderRadius: responsiveWidthPixel(22 / 2),
  },
  CrossButton: {
    backgroundColor: 'black',
    position: 'absolute',
    width: responsiveWidthPixel(30),
    height: responsiveWidthPixel(30),
    borderRadius: responsiveWidthPixel(30 / 2),
    top: -responsiveHeightPixel(110),
    alignSelf: 'center',
  },
});

export default EditProfileModal;
