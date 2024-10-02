import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {CustomeText_14pt, CustomeText_18pt} from './TextComponents/CustomeText';
import SizedView from './SizedBox/SizedView';
import {IMAGES} from '../../assets/constants/ImageConstant';
import IconCircleButton from './Buttons/IconCircleButton';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {imgPath} from '../../assets/constants/NetworkImage';
import useModal from '../hooks/useModal';
import ViewDocumentModal from '../components/Modals/ViewDocumentModal';

export function SeeTheAttachments({DocumentURL}) {
  const {Visible, onClose, onOpen} = useModal();

  return (
    <View style={styles_1.RowContainer}>
      <View
        style={[
          styles_1.RowContainer,
          {
            justifyContent: null,
            columnGap: responsiveWidthPixel(21),
            width: null,
          },
        ]}>
        <CustomeText_14pt
          TextData={'See the attachments'}
          style={styles_1.BoldText}
          onPress={onOpen}
        />
        <Image source={IMAGES.PDF} style={styles_1.PDF} />
      </View>
      <View
        style={[
          styles_1.RowContainer,
          {
            justifyContent: null,
            columnGap: responsiveWidthPixel(8),
            width: null,
          },
        ]}>
        <IconCircleButton
          DocumentURL={DocumentURL}
          ButtonStyle={styles_1.BlackButton} // onPress={onRequestClose}
          Icon={
            <Icons.Entypo
              name={'eye'}
              color={'white'}
              size={responsiveWidth(3)}
            />
          }
        />
        <IconCircleButton
          DocumentURL={DocumentURL}
          download
          ButtonStyle={styles_1.BlackButton} // onPress={onRequestClose}styles_1
          Icon={
            <Icons.Feather
              name={'download'}
              color={'white'}
              size={responsiveWidth(3)}
            />
          }
        />
      </View>
      {Visible ? (
        <ViewDocumentModal
          url={DocumentURL}
          visible={Visible}
          onRequestClose={onClose}
        />
      ) : null}
    </View>
  );
}

const Entrie_1 = ({item}) => {
  return (
    <View style={styles_1.MainStyle}>
      <View style={styles_1.RowContainer}>
        <CustomeText_14pt
          TextData={`Bill Number : ${item?.bill_no || '--'}`}
          style={styles_1.BoldText}
        />
        <CustomeText_14pt
          TextData={`Date : ${item?.date}`}
          style={styles_1.BoldText}
        />
      </View>
      <SizedView height={responsiveHeightPixel(12)} />
      <SizedView style={styles_1.HorizontalLine} />
      <SizedView height={responsiveHeightPixel(12)} />
      <View style={[styles_1.RowContainer, styles_1.GrayBackRounded]}>
        <CustomeText_14pt TextData={'Amount'} />
        <CustomeText_18pt
          TextData={`₹ ${item?.amount}`}
          style={styles_1.BoldText}
        />
      </View>
      <SizedView height={responsiveHeightPixel(8)} />
      <View style={styles_1.RowContainer}>
        <View style={{flex: 1}}>
          {item?.payment_method ? (
            <CustomeText_14pt TextData={`Paid by : ${item?.payment_method}`} />
          ) : null}
          <CustomeText_14pt
            TextData={
              <>
                Status :{' '}
                <Text
                  style={{
                    color: item?.payment_status == '1' ? '#0BA82B' : 'red',
                  }}>
                  {item?.payment_status == '1' ? `Paid` : `UnPaid`}
                </Text>
              </>
            }
          />
        </View>
        <View style={{flex: 1}}>
          <CustomeText_14pt TextData={'Debited From Account :'} />
          <CustomeText_14pt
            TextData={`${item?.debited_site?.site_name}`}
            style={styles_1.BoldText}
          />
        </View>
      </View>
      {item?.attachment ? (
        <>
          <SizedView height={responsiveHeightPixel(14)} />
          <SizedView style={styles_1.HorizontalLine} />
          <SizedView height={responsiveHeightPixel(14)} />
          <SeeTheAttachments DocumentURL={imgPath + item?.attachment} />
        </>
      ) : null}
    </View>
  );
};

export default Entrie_1;

export const styles_1 = StyleSheet.create({
  MainStyle: {
    marginHorizontal: responsiveWidthPixel(10),
    marginVertical: responsiveHeightPixel(8),
    borderRadius: 5,
    padding: responsiveHeightPixel(12),
    backgroundColor: 'white',
    elevation: 5,
    overflow: 'hidden',
  },
  RowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  BoldText: {
    fontWeight: 'bold',
  },
  HorizontalLine: {
    backgroundColor: '#E6E6E6',
    height: 1.5,
    width: '100%',
  },
  PDF: {
    width: responsiveHeightPixel(15),
    height: responsiveHeightPixel(18),
    resizeMode: 'contain',
  },
  GrayBackRounded: {backgroundColor: '#F2F2F2', borderRadius: 5, padding: 10},
  BlackButton: {
    backgroundColor: 'black',
    width: responsiveWidthPixel(24),
    height: responsiveWidthPixel(24),
    borderRadius: responsiveWidthPixel(24 / 2),
  },
});
