import {StyleSheet, View, Platform, StatusBar} from 'react-native';
import React from 'react';

const DefaultWrap = ({children, style, SafeAreaEnabled}) => {
  return (
    <View
      style={[
        styles.contaner,
        style,
        SafeAreaEnabled
          ? {
              paddingTop:
                Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            }
          : null,
      ]}>
      {children}
    </View>
  );
};

export default DefaultWrap;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: 'white',
  },
});
