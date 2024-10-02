import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {CustomeText_16pt} from '../TextComponents/CustomeText';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import useModal from '../../hooks/useModal';
import ImagePickerModal_1 from '../../components/Modals/ImagePickerModal_1';

const TextIconButton = ({ButtonStyle, Icon, onPress, TextData, TextStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.MainStyle, ButtonStyle]}>
      <CustomeText_16pt TextData={TextData} style={[styles.Text, TextStyle]} />
      {Icon}
    </TouchableOpacity>
  );
};

export default TextIconButton;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(38),
    width: responsiveHeightPixel(116),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3E3E3',
    columnGap: responsiveWidthPixel(11),
    flexDirection: 'row',
  },
  Text: {
    color: 'black',
    fontSize: responsiveFontSize(1.8),
  },
});

export const TextIconButtonUploadSingleImage = ({
  handleInputChange,
  FormObjName,
  NumberOfImages = 1,
  Append,
  SelecedImages,
  ...props
}) => {
  const {
    Visible: ImagePickerVisible,
    onOpen: ImagePickerOpen,
    onClose: ImagePickerClose,
  } = useModal(false);
  return (
    <>
      <TextIconButton {...props} onPress={ImagePickerOpen} />
      {ImagePickerVisible ? (
        <ImagePickerModal_1
          visible={true}
          onRequestClose={ImagePickerClose}
          NumberOfImages={NumberOfImages}
          FormObjName={FormObjName}
          handleInputChange={handleInputChange}
          Append={Append}
          SelecedImages={SelecedImages}
        />
      ) : null}
    </>
  );
};
