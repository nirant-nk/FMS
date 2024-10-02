import React, {useRef} from 'react';
import {View, Modal, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {getFileTypeAndName} from '../Helpers/CommonHelpers';
import Pdf from 'react-native-pdf';
import FastImage from 'react-native-fast-image';
import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const ViewDocument = ({url}) => {
  const {name, type} = getFileTypeAndName(url);
  const ViewRef = useRef();

  if (type == 'application/pdf') {
    const source = {uri: url, cache: true};
    return (
      <>
        <View ref={ViewRef} style={styles.modalContainer}>
          <Pdf
            trustAllCerts={false}
            source={source}
            // onLoadComplete={(numberOfPages, filePath) => {
            //   console.log(`Number of pages: `);
            // }}
            // onPageChanged={(page, numberOfPages) => {
            //   console.log(`Current page: `);
            // }}
            // onError={error => {
            //   console.log(error);
            // }}
            // onPressLink={uri => {
            //   console.log(`Link pressed: `);
            // }}
            style={styles.modalContainer}
          />
        </View>
      </>
    );
  }

  if (type == 'image/gif' || type == 'image/png' || type == 'image/jpeg') {
    return (
      <>
        <ImageZoom
          minScale={0.5}
          maxScale={3}
          uri={url}
          resizeMode="contain"
          style={styles.modalContainer}
        />
      </>
    );
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: responsiveHeight(70),
  },
});

export default ViewDocument;
