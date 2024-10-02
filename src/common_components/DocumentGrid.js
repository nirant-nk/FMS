import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {styles_1} from './Entrie_1';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {CustomeText_12pt} from './TextComponents/CustomeText';
import {getFileTypeAndName} from '../Helpers/CommonHelpers';
import Pdf from 'react-native-pdf';
import FastImage from 'react-native-fast-image';
import IconCircleButton from './Buttons/IconCircleButton';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';

const DocumentType = {
  'image/jpeg': IMAGES.JPEG,
  'image/jpeg': IMAGES.JPEG,
  'image/png': IMAGES.JPEG,
  'image/gif': IMAGES.JPEG,
  'video/mp4': IMAGES.VIDEO,
  'video/quicktime': IMAGES.VIDEO,
  'video/x-msvideo': IMAGES.VIDEO,
  'application/pdf': IMAGES.PDF,
  // 'application/msword',
  // 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  // Add more mappings as needed
};

const DocumentGrid = ({item, name}) => {
  const [Information, SetInformation] = useState({});
  const getInfo = () => {
    const res = getFileTypeAndName(item.url);
    // console.warn(res);
    SetInformation(res);
  };

  useEffect(() => {
    getInfo();
  }, []);
  const source = {uri: item.url, cache: true};

  return (
    <View style={styles_5.MainStyle}>
      <View>
        {Information.type == 'application/pdf' ? (
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
            style={styles_5.Thumnail}
          />
        ) : (
          <FastImage
            style={styles_5.Thumnail}
            source={{
              uri: item.url,
            }}
          />
        )}

        <View
          style={[
            styles_5.RowContainer,
            StyleSheet.absoluteFill,
            {alignItems: 'center', justifyContent: 'center'},
          ]}>
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
      </View>

      <View style={[styles_5.RowContainer, {justifyContent: 'center'}]}>
        <Image source={DocumentType[Information.type]} style={styles_5.PDF} />
        <CustomeText_12pt
          TextData={`${name || Information?.name}`}
          style={[styles_1.BoldText, styles_5.FileText]}
          numberOfLines={1}
        />
      </View>
    </View>
  );
};

export default DocumentGrid;

export const styles_5 = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(127),
    width: responsiveWidthPixel(168),
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 5,
    padding: responsiveWidthPixel(6),
    justifyContent: 'space-between',
    margin: responsiveWidthPixel(10),
  },
  PDF: {
    width: responsiveHeightPixel(18),
    height: responsiveHeightPixel(21),
    resizeMode: 'contain',
  },
  RowContainer: {
    ...styles_1.RowContainer,
    width: null,
    columnGap: responsiveWidthPixel(8),
  },
  GrayIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: responsiveWidthPixel(24),
    height: responsiveWidthPixel(24),
    borderRadius: responsiveWidthPixel(24 / 2),
  },
  Thumnail: {
    height: responsiveHeightPixel(91),
    width: responsiveWidthPixel(159),
    borderRadius: 5,
    alignSelf: 'center',
  },
  FileText: {
    width: responsiveWidthPixel(120),
  },
});
