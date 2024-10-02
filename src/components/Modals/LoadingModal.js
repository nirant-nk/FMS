import {View, Modal, ActivityIndicator} from 'react-native';
import React from 'react';

const LoadingModal = ({isLoading}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isLoading}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </Modal>
  );
};

export default LoadingModal;
