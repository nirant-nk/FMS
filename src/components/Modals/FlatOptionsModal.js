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

import {BlurView} from '@react-native-community/blur';
import {CustomeText_18pt} from '../../common_components/TextComponents/CustomeText';
import SizedView from '../../common_components/SizedBox/SizedView';

const FlatOptionsModal = ({
  visible,
  onRequestClose,
  onViewPlan,
  onMakeItSold,
  SelectedFlat,
}) => {
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
              <CustomeText_18pt TextData={'View plan'} onPress={onViewPlan} />
              {SelectedFlat?.sold == '0' ? (
                <>
                  <SizedView height={responsiveHeightPixel(13)} />
                  <CustomeText_18pt
                    TextData={'Make It Sold'}
                    onPress={onMakeItSold}
                  />
                </>
              ) : null}
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
    width: responsiveWidthPixel(199),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 20,
    paddingHorizontal: responsiveWidthPixel(19),
    paddingVertical: responsiveHeightPixel(21),
    // alignItems: 'center',
  },
});

export default FlatOptionsModal;
