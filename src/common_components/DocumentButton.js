import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {styles_1} from './Entrie_1';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {CustomeText_14pt} from './TextComponents/CustomeText';
import IconCircleButton from './Buttons/IconCircleButton';
import {getFileTypeAndName} from '../Helpers/CommonHelpers';

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

const DocumentButton = ({item}) => {
  const [Information, SetInformation] = useState({});
  const getInfo = () => {
    const res = getFileTypeAndName(item.url);
    // console.warn(res);
    SetInformation(res);
  };

  useEffect(() => {
    getInfo();
  }, []);
  // const source = {uri: item.url, cache: true};

  return (
    <View style={styles.MainStyle}>
      <IconCircleButton
        DocumentURL={item.url}
        ButtonStyle={styles.ButtonStyle}
        Icon={
          <Image source={DocumentType[Information.type]} style={styles.PDF} />
        }
      />

      <CustomeText_14pt
        TextData={`${Information?.name}`}
        style={[styles_1.BoldText, styles.FileText]}
        numberOfLines={1}
      />
    </View>
  );
};

export default DocumentButton;

const styles = StyleSheet.create({
  MainStyle: {
    alignItems: 'center',
    margin: responsiveWidthPixel(11),
  },
  ButtonStyle: {
    height: responsiveHeightPixel(70),
    width: responsiveHeightPixel(70),
    borderRadius: responsiveHeightPixel(70 / 2),
    backgroundColor: '#F3F3F3',
  },
  PDF: {
    height: responsiveHeightPixel(31),
    width: responsiveWidthPixel(23),
  },
  FileText: {
    width: responsiveWidthPixel(70),
  },
});
