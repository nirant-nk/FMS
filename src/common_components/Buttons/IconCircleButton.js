import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveHeightPixel} from '../../Helpers/ResponsivePixel';
import useModal from '../../hooks/useModal';
import ViewDocumentModal from '../../components/Modals/ViewDocumentModal';
import {checkPermissionAndDownloadFile} from '../../Helpers/DownloadFileHelper';
import Share from 'react-native-share';
const IconCircleButton = ({
  ButtonStyle,
  Icon,
  onPress,
  DocumentURL,
  download,
  share,
}) => {
  const onShare = async () => {
    const options = {
      message: DocumentURL,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  const {Visible, onClose, onOpen} = useModal();

  const downloadNow = () => {
    checkPermissionAndDownloadFile(DocumentURL);
  };

  const onButtonPress = () => {
    if (DocumentURL) {
      if (share) {
        onShare();
        return;
      }
      if (download) {
        downloadNow();
        return;
      }
      onOpen();
    } else {
      onPress();
    }
  };
  return (
    <>
      <TouchableOpacity
        onPress={onButtonPress}
        style={[styles.MainStyle, ButtonStyle]}>
        {Icon}
      </TouchableOpacity>
      {Visible ? (
        <ViewDocumentModal
          url={DocumentURL}
          visible={Visible}
          onRequestClose={onClose}
        />
      ) : null}
    </>
  );
};

export default IconCircleButton;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(33),
    width: responsiveHeightPixel(33),
    borderRadius: responsiveHeightPixel(33 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
