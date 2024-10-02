import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';
const LoadingComponent = ({Loader, style}) => {
  return Loader ? (
    <View style={[styles.MainStyle, style]}>
      <ActivityIndicator size="large" color={'#009B00'} />
    </View>
  ) : null;
};

export default LoadingComponent;

const styles = StyleSheet.create({
  MainStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
