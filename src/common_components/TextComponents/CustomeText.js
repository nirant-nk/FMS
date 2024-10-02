import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {responsiveWidthPixel} from '../../Helpers/ResponsivePixel';

export const CustomeText_24pt = ({TextData, style, ...props}) => {
  return (
    <Text {...props} style={[styles.textStyle_24pt, style]}>
      {TextData}
    </Text>
  );
};

export const CustomeText_18pt = ({TextData, style, ...props}) => {
  return (
    <Text {...props} style={[styles.textStyle_18pt, style]}>
      {TextData}
    </Text>
  );
};
export const CustomeText_16pt = ({TextData, style, ...props}) => {
  return (
    <Text {...props} style={[styles.textStyle_16pt, style]}>
      {TextData}
    </Text>
  );
};

export const CustomeText_14pt = ({TextData, style, ...props}) => {
  return (
    <Text {...props} style={[styles.textStyle_14pt, style]}>
      {TextData}
    </Text>
  );
};

export const CustomeText_12pt = ({TextData, style, ...props}) => {
  return (
    <Text {...props} style={[styles.textStyle_12pt, style]}>
      {TextData}
    </Text>
  );
};

export const CustomeText_10pt = ({TextData, style, ...props}) => {
  return (
    <Text {...props} style={[styles.textStyle_10pt, style]}>
      {TextData}
    </Text>
  );
};
export const CustomeText_8pt = ({TextData, style, ...props}) => {
  return (
    <Text {...props} style={[styles.textStyle_8pt, style]}>
      {TextData}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle_24pt: {
    fontSize: responsiveFontSize(3.1),
    color: 'black',
  },
  textStyle_18pt: {
    fontSize: responsiveFontSize(2.4),
    color: 'black',
  },
  textStyle_16pt: {
    fontSize: responsiveFontSize(2),
    color: 'black',
  },
  textStyle_14pt: {
    fontSize: responsiveFontSize(1.8),
    color: 'black',
  },
  textStyle_12pt: {
    fontSize: responsiveFontSize(1.49),
    color: 'black',
  },
  textStyle_10pt: {
    fontSize: responsiveFontSize(1.35),
    color: 'black',
  },
  textStyle_8pt: {
    fontSize: responsiveFontSize(1.0),
    color: 'black',
  },
});
