import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {CustomeText_10pt, CustomeText_14pt} from './TextComponents/CustomeText';
import TextIconButton from './Buttons/TextIconButton';
import Icons from '../../assets/Icons/Icons';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import SizedView from './SizedBox/SizedView';
import Text_Input_1, {ErrorMSG} from './TextInputs/Text_Input_1';
import {CrossButton} from '../screens/AddDevelopmentSiteScreen';

const DocumentUpload = ({
  TextData,
  onPress,
  Error,
  SelectedFile,
  onUploadPress,
  pdfName,
  Text_Input_1Props,
  onCross,
}) => {
  return (
    <>
      <View>
        <View style={styles.HorizontalLine}></View>
        {onCross ? (
          <CrossButton
            onPress={onCross}
            style={{right: responsiveWidthPixel(0)}}
          />
        ) : null}
      </View>
      <View style={styles.MainView}>
        <Text_Input_1
          {...Text_Input_1Props}
          style={{height: responsiveHeightPixel(42)}}
        />
        <SizedView height={responsiveHeightPixel(12)} />

        <View style={styles.View_1}>
          <View>
            <TextIconButton
              onPress={onPress}
              TextData={'Upload'}
              Icon={
                <Icons.Feather
                  name={'upload'}
                  color={'black'}
                  size={responsiveWidth(5)}
                />
              }
            />
            {pdfName && (
              <CustomeText_10pt
                TextData={`${pdfName}`}
                style={{
                  color: '#000000',
                  width: responsiveWidthPixel(90),
                  textAlign: 'center',
                }}
              />
            )}
          </View>
          <CustomeText_10pt
            TextData={`(pdf, jpg can be  acceptable)`}
            style={{
              color: '#000000',
              width: SelectedFile?.name ? responsiveWidthPixel(80) : null,
            }}
          />
          {SelectedFile?.name ? (
            <CustomeText_10pt
              TextData={`${SelectedFile?.name}\nFile attached`}
              style={{
                color: '#000000',
                width: responsiveWidthPixel(90),
                textAlign: 'center',
              }}
            />
          ) : null}
        </View>
        <ErrorMSG Error={Error} marginTop={10} />
      </View>
    </>
  );
};

export default DocumentUpload;

const styles = StyleSheet.create({
  MainView: {
    // height: responsiveHeightPixel(105),

    paddingBottom: responsiveHeightPixel(10),
  },
  View_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HorizontalLine: {
    height: responsiveHeightPixel(3),
    backgroundColor: '#E6E6E6',
    width: responsiveWidthPixel(321),
    alignSelf: 'center',
  },
});
