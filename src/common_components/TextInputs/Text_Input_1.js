import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CustomeText_14pt} from '../TextComponents/CustomeText';
import Icons from '../../../assets/Icons/Icons';
import useModal from '../../hooks/useModal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Text_Input_1 = ({
  Value,
  handleInputChange,
  TextArea = false,
  Placeholder,
  Error,
  TextLimit,
  onSubmitEditing,
  inputRef,
  keyboardType,
  FormObjName,
  Editable,
  style,
  TextInputstyle,
  multiline,
  index,
  Findex,
  Icon,
  _onImageChange,
  Title,
  onCalender,
  onDropdown,
  onSearch,
  MainContainer,
  minDate,
  onCross,
  maxDate,
  sanitizationFunction,
}) => {
  const {Visible, onOpen, onClose} = useModal();

  const onDatePicked = date => {
    onClose();
    handleInputChange(FormObjName, date);
  };

  return (
    <>
      <View style={[{width: '100%'}, MainContainer]}>
        {Title ? <CustomeText_14pt TextData={Title} /> : null}
        <View
          style={[
            Text_Input_Styles.MainView,
            {
              alignItems: TextArea ? 'flex-start' : 'center',
              height: responsiveHeightPixel(TextArea ? 90 : 50),
              borderColor: Error ? 'red' : '#00000066',
              borderWidth: Error ? 1 : 0,
            },
            style,
          ]}>
          {Icon}
          <TextInput
            onImageChange={_onImageChange}
            autoCapitalize="none"
            onSubmitEditing={onSubmitEditing}
            ref={inputRef}
            keyboardType={keyboardType}
            multiline={TextArea || multiline}
            style={[Text_Input_Styles.TextInputstyle, TextInputstyle]}
            placeholder={Placeholder}
            maxLength={TextLimit}
            value={Value}
            onChangeText={text => {
              let NewText = text;
              if (sanitizationFunction) {
                NewText = sanitizationFunction(text);
              }
              if (index !== undefined && index !== null) {
                if (Findex !== undefined && Findex !== null) {
                  handleInputChange(index, Findex, NewText);
                } else {
                  handleInputChange(index, FormObjName, NewText);
                }
              } else {
                handleInputChange(FormObjName, NewText);
              }
            }}
            editable={Editable}
          />
          {onCalender ? (
            <TouchableOpacity
              onPress={onOpen}
              style={{position: 'absolute', right: responsiveWidth(3)}}>
              <Icons.Feather
                name={'calendar'}
                size={responsiveHeightPixel(23)}
                color="#9E9E9E"
              />
            </TouchableOpacity>
          ) : null}
          {onDropdown ? (
            <TouchableOpacity
              onPress={onDropdown}
              style={{position: 'absolute', right: responsiveWidth(3)}}>
              <Icons.MaterialIcons
                name={'keyboard-arrow-down'}
                size={responsiveHeightPixel(30)}
                color="#9E9E9E"
              />
            </TouchableOpacity>
          ) : null}
          {onSearch ? (
            <TouchableOpacity
              onPress={onSearch}
              style={{position: 'absolute', right: responsiveWidth(3)}}>
              <Icons.AntDesign
                name={'search1'}
                size={responsiveHeightPixel(25)}
                color="#9E9E9E"
              />
            </TouchableOpacity>
          ) : null}

          {onCross ? (
            <TouchableOpacity
              onPress={onCross}
              style={{position: 'absolute', right: responsiveWidth(3)}}>
              <Icons.Entypo
                name={'cross'}
                size={responsiveHeightPixel(25)}
                color="#9E9E9E"
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {Error && <Text style={Text_Input_Styles.ErrorMsg}>{Error}</Text>}
      </View>
      {Visible ? (
        <DateTimePickerModal
          isVisible={Visible}
          mode="date"
          onConfirm={onDatePicked}
          onCancel={onClose}
          minimumDate={minDate}
          maximumDate={maxDate}
        />
      ) : null}
    </>
  );
};

export default memo(Text_Input_1);

export const Text_Input_Styles = StyleSheet.create({
  ErrorMsg: {
    color: 'red',
    fontSize: responsiveFontSize(1.6),
  },
  MainView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: responsiveHeight(0),
    marginTop: responsiveHeightPixel(10),
    backgroundColor: '#F6F6F6',
  },
  TextInputstyle: {
    flex: 8.5,
    color: '#7A7A7A',
    paddingHorizontal: responsiveWidthPixel(15),
    fontSize: responsiveFontSize(1.8),
  },
});

export const ErrorMSG = ({Error, marginTop, TextStyle}) => {
  if (Error && marginTop) {
    return (
      <Text
        style={[
          Text_Input_Styles.ErrorMsg,
          {marginTop: responsiveHeightPixel(marginTop)},
          TextStyle,
        ]}>
        {Error}
      </Text>
    );
  }

  if (Error) {
    return <Text style={[Text_Input_Styles.ErrorMsg, TextStyle]}>{Error}</Text>;
  }

  return null;
};
