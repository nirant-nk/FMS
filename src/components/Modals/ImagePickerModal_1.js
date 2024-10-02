import React, {useRef} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import Icons from '../../../assets/Icons/Icons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CameraImagePicker, ImagePicker} from '../../Helpers/ImagePickerHelpers';
import {BlurView} from '@react-native-community/blur';

const ImagePickerModal_1 = ({
  visible,
  onRequestClose,
  NumberOfImages = 0,
  handleInputChange,
  FormObjName,
  SelecedImages,
  Append,
  index,
}) => {
  const ViewRef = useRef();
  const onCamera = async () => {
    try {
      onRequestClose();
      const Res = await CameraImagePicker(NumberOfImages);
      console.warn('Images Picked From Camera', Res);
      if (Res) {
        if (Append) {
          if (index !== undefined && index !== null) {
            handleInputChange(index, FormObjName, [...SelecedImages, ...Res]);
          } else {
            handleInputChange(FormObjName, [...SelecedImages, ...Res]);
          }
        } else {
          if (index !== undefined && index !== null) {
            handleInputChange(index, FormObjName, Res);
          } else {
            handleInputChange(FormObjName, Res);
          }
        }
      }
    } catch (error) {
      console.log('ERROR in onCamera', error);
    }
  };
  const onGallery = async () => {
    try {
      onRequestClose();
      const Res = await ImagePicker(NumberOfImages);
      console.warn('Images Picked From gallery', Res);

      if (Res) {
        if (Append) {
          if (index !== undefined && index !== null) {
            handleInputChange(index, FormObjName, [...SelecedImages, ...Res]);
          } else {
            handleInputChange(FormObjName, [...SelecedImages, ...Res]);
          }
        } else {
          if (index !== undefined && index !== null) {
            handleInputChange(index, FormObjName, Res);
          } else {
            handleInputChange(FormObjName, Res);
          }
        }
      }
    } catch (error) {
      console.log('ERROR in onGallery');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View ref={ViewRef} style={styles.modalContainer}>
          <View style={styles.MainContainer}>
            <TouchableOpacity onPress={onCamera} style={styles.OptionsView1}>
              <Icons.Entypo
                name={'camera'}
                size={responsiveHeight(3)}
                color={'#656565'}
              />
              <Text style={styles.OptionsText}>Take from Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onGallery} style={styles.OptionsView2}>
              <Icons.Entypo
                name={'images'}
                size={responsiveHeight(3)}
                color={'#656565'}
              />
              <Text style={styles.OptionsText}>Choose from gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {ViewRef && visible ? (
        <BlurView
          style={styles.absolute}
          viewRef={ViewRef}
          blurType="light"
          blurAmount={5}
          blurRadius={5}
        />
      ) : null}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    height: responsiveHeightPixel(100),
    width: responsiveWidthPixel(220),
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: 'black',
    elevation: 20,
    paddingTop: responsiveHeightPixel(18),
    paddingHorizontal: responsiveHeightPixel(14),
  },
  TitleView: {
    height: responsiveHeightPixel(47),
    paddingLeft: responsiveWidthPixel(21),
    paddingRight: responsiveWidthPixel(7),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#009B00',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OptionsView1: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  OptionsView2: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TitleText: {
    color: '#009B00',
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
  },
  OptionsText: {
    color: '#000000',
    fontSize: responsiveFontSize(1.8),
    paddingLeft: responsiveWidthPixel(12),
    fontWeight: '500',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
});

export default ImagePickerModal_1;
