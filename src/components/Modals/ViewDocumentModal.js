import React, {useRef} from 'react';
import {View, Modal, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {getFileTypeAndName} from '../../Helpers/CommonHelpers';
import Pdf from 'react-native-pdf';
import FastImage from 'react-native-fast-image';
import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import VideoPlayer from '../../common_components/VideoPlayer/VideoPlayer';

const ViewDocumentModal = ({visible, onRequestClose, url}) => {
  const {name, type} = getFileTypeAndName(url);
  const ViewRef = useRef();

  if (type == 'application/pdf') {
    const source = {uri: url, cache: true};
    return (
      <>
        <Modal
          visible={visible}
          transparent
          animationType="fade"
          onRequestClose={onRequestClose}>
          {/* <TouchableWithoutFeedback onPress={onRequestClose}> */}
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
          {/* </TouchableWithoutFeedback> */}
        </Modal>
      </>
    );
  }

  if (type == 'image/gif' || type == 'image/png' || type == 'image/jpeg') {
    return (
      <>
        <Modal
          visible={visible}
          transparent
          animationType="fade"
          onRequestClose={onRequestClose}>
          {/* <TouchableWithoutFeedback onPress={onRequestClose}> */}
          <View ref={ViewRef} style={styles.modalContainer}>
            {/* <FastImage source={source} style={{flex: 1}} resizeMode="contain" /> */}
            <ImageZoom
              minScale={0.5}
              maxScale={3}
              uri={url}
              resizeMode="contain"
              // style={styles.modalContainer}
            />
          </View>
          {/* </TouchableWithoutFeedback> */}
        </Modal>
      </>
    );
  }

  if (
    type == 'video/x-msvideo' ||
    type == 'video/quicktime' ||
    type == 'video/mp4'
  ) {
    return (
      <>
        <Modal
          visible={visible}
          animationType="fade"
          onRequestClose={onRequestClose}>
          <TouchableWithoutFeedback onPress={onRequestClose}>
            <View style={styles.modalContainer}>
              <VideoPlayer VideoPath={url} onRequestClose={onRequestClose} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View ref={ViewRef} style={styles.modalContainer}></View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});

export default ViewDocumentModal;
