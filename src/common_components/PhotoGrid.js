import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {styles_5} from './DocumentGrid';
import IconCircleButton from './Buttons/IconCircleButton';
import Icons from '../../assets/Icons/Icons';
import {IMAGES} from '../../assets/constants/ImageConstant';
import FastImage from 'react-native-fast-image';
import useModal from '../hooks/useModal';
import ViewDocumentModal from '../components/Modals/ViewDocumentModal';

const PhotoGrid = ({item, isVideo, isOptions = true}) => {
  const source = {uri: item.url};
  const {Visible, onClose, onOpen} = useModal();
  return isVideo ? (
    <>
      <TouchableOpacity
        onPress={onOpen}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <FastImage
          style={styles.Thumnail}
          source={{
            uri: item.url,
          }}
        />
        <Image source={IMAGES.PLAY} style={styles.PlayButton} />
      </TouchableOpacity>
      {Visible ? (
        <ViewDocumentModal
          url={item.url}
          visible={Visible}
          onRequestClose={onClose}
        />
      ) : null}
    </>
  ) : (
    <ImageBackground style={styles.MainStyle} source={source}>
      {isOptions ? (
        <View style={[styles_5.RowContainer]}>
          <IconCircleButton
            DocumentURL={item.url}
            ButtonStyle={styles_5.GrayIcon} // onPress={onRequestClose}styles_1
            Icon={
              <Icons.Entypo
                name={'eye'}
                color={'white'}
                size={responsiveWidth(3)}
              />
            }
          />
          <IconCircleButton
            DocumentURL={item.url}
            download
            ButtonStyle={styles_5.GrayIcon} // onPress={onRequestClose}styles_1
            Icon={
              <Icons.Feather
                name={'download'}
                color={'white'}
                size={responsiveWidth(3)}
              />
            }
          />
          <IconCircleButton
            DocumentURL={item.url}
            share
            ButtonStyle={styles_5.GrayIcon} // onPress={onRequestClose}styles_1
            Icon={
              <Icons.FontAwesome5
                name={'share-alt'}
                color={'white'}
                size={responsiveWidth(2.8)}
              />
            }
          />
        </View>
      ) : null}
    </ImageBackground>
  );
};

export default PhotoGrid;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(125),
    width: responsiveWidthPixel(167),
    borderRadius: 2,
    padding: responsiveHeightPixel(8),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: responsiveWidthPixel(10),
  },
  Thumnail: {
    height: responsiveHeightPixel(125),
    width: responsiveWidthPixel(167),
    borderRadius: 5,
    padding: responsiveHeightPixel(8),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: responsiveWidthPixel(10),
  },
  VideoButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  PlayButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: responsiveHeightPixel(36),
    width: responsiveWidthPixel(32),
    resizeMode: 'contain',
  },
});
