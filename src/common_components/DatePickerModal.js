import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useModal from '../hooks/useModal';

const DatePickerModal = () => {
  const {Visible, onOpen, onClose} = useModal();

  return (
    <View>
      <Text>DatePickerModal</Text>
    </View>
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({});
