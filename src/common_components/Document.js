import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {styles_1} from './Entrie_1';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {CustomeText_12pt} from './TextComponents/CustomeText';
import IconCircleButton from './Buttons/IconCircleButton';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {getFileTypeAndName} from '../Helpers/CommonHelpers';
import Pdf from 'react-native-pdf';
import FastImage from 'react-native-fast-image';

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

const Document = ({item, name, downloadURL}) => {
  const [Information, SetInformation] = useState({});
  const getInfo = () => {
    const res = getFileTypeAndName(item.url);
    SetInformation(res);
  };

  useEffect(() => {
    // console.log(`Information:- ${Information}`);
    // console.log(Information);
    getInfo();
  }, []);
  const source = {uri: item.url, cache: true};

  return (
    <View style={styles.MainStyle}>
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
          style={styles.Thumnail}
        />
      ) : (
        <FastImage
          style={styles.Thumnail}
          source={{
            uri: item.url,
          }}
        />
      )}

      <View style={styles_1.RowContainer}>
        <View style={styles.RowContainer}>
          <Image source={DocumentType[Information.type]} style={styles.PDF} />
          <CustomeText_12pt
            TextData={`${name || Information?.name}`}
            style={[styles_1.BoldText, styles.FileText]}
            numberOfLines={2}
          />
        </View>
        <View style={styles.RowContainer}>
          <IconCircleButton
            DocumentURL={item.url}
            ButtonStyle={styles.GrayIcon} // onPress={onRequestClose}styles_1
            Icon={
              <Icons.Entypo
                name={'eye'}
                color={'white'}
                size={responsiveWidth(3)}
              />
            }
          />
          <IconCircleButton
            DocumentURL={downloadURL || item.url}
            download
            ButtonStyle={styles.GrayIcon} // onPress={onRequestClose}styles_1
            Icon={
              <Icons.Feather
                name={'download'}
                color={'white'}
                size={responsiveWidth(3)}
              />
            }
          />
          <IconCircleButton
            DocumentURL={downloadURL || item.url}
            share
            ButtonStyle={styles.GrayIcon} // onPress={onRequestClose}styles_1
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
    </View>
  );
};

export default Document;

const styles = StyleSheet.create({
  MainStyle: {
    height: responsiveHeightPixel(241),
    marginHorizontal: responsiveWidthPixel(15),
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 5,
    marginTop: responsiveHeightPixel(25),
    padding: responsiveWidthPixel(15),
    justifyContent: 'space-between',
  },
  PDF: {
    width: responsiveHeightPixel(18),
    height: responsiveHeightPixel(21),
    resizeMode: 'contain',
  },
  RowContainer: {
    ...styles_1.RowContainer,
    width: null,
    columnGap: responsiveWidthPixel(15),
  },
  GrayIcon: {
    backgroundColor: '#DBDBDB',
    width: responsiveWidthPixel(24),
    height: responsiveWidthPixel(24),
    borderRadius: responsiveWidthPixel(24 / 2),
  },
  Thumnail: {
    height: responsiveHeightPixel(170),
    width: responsiveWidthPixel(295),
    borderRadius: 5,
    alignSelf: 'center',
  },
  FileText: {
    width: responsiveWidthPixel(170),
  },
});
