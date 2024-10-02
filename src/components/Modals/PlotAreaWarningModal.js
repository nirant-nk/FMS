import React, {useRef} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';

import {CustomeText_16pt} from '../../common_components/TextComponents/CustomeText';
import {BlurView} from '@react-native-community/blur';
import {CrossButton} from '../../screens/AddDevelopmentSiteScreen';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const PlotAreaWarningModal = ({visible, onRequestClose}) => {
  const ViewRef = useRef();
  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View ref={ViewRef} style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              <CustomeText_16pt
                TextData={`Hello User,\nYou've to enter total plotting area = total plot area`}
              />
              <CrossButton
                onPress={onRequestClose}
                style={{top: responsiveHeight(-3)}}
              />
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
        {ViewRef && visible ? (
          <BlurView
            style={[StyleSheet.absoluteFill, {zIndex: -1}]}
            viewRef={ViewRef}
            blurType="light"
            blurAmount={5}
            blurRadius={5}
          />
        ) : null}
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    width: responsiveWidthPixel(294),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 20,
    paddingHorizontal: responsiveWidthPixel(30),
    paddingVertical: responsiveHeightPixel(26),
    alignItems: 'center',
  },
});

export default PlotAreaWarningModal;
