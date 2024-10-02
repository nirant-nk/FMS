import {Text, View} from 'react-native';
import React from 'react';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {CustomeText_14pt, CustomeText_18pt} from './TextComponents/CustomeText';
import SizedView from './SizedBox/SizedView';
import {imgPath} from '../../assets/constants/NetworkImage';
import {SeeTheAttachments, styles_1} from './Entrie_1';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';

const TilesEntrieEntrie = ({item}) => {
  const {CurrentSupplierDetails} = useMyContext();

  const getName = {
    11: 'tile_contractor',
    14: 'painter',
    15: 'electrician',
    16: 'plumber',
  };
  return (
    <View style={styles_1.MainStyle}>
      <View style={styles_1.RowContainer}>
        <View></View>
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
          TextData={`₹ ${item?.amount || 0}`}
          style={styles_1.BoldText}
        />
      </View>
      <SizedView height={responsiveHeightPixel(8)} />
      <View
        style={[
          styles_1.RowContainer,
          {columnGap: responsiveWidth(1), alignItems: null},
        ]}>
        <View style={{flex: 1, rowGap: responsiveHeightPixel(3)}}>
          <CustomeText_14pt
            TextData={`Labour Qty : ${
              item[getName[CurrentSupplierDetails.current.id]]?.labour_quantity
            }`}
          />

          {item?.payment_method ? (
            <CustomeText_14pt TextData={`Paid by : ${item?.payment_method}`} />
          ) : null}
        </View>
        <View style={{flex: 1, rowGap: responsiveHeightPixel(3)}}>
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
          <CustomeText_14pt TextData={'Debited From Account :'} />
          <CustomeText_14pt
            TextData={`${item?.contract_site?.name}`}
            style={styles_1.BoldText}
          />
        </View>
      </View>
      {item?.bill ? (
        <>
          <SizedView height={responsiveHeightPixel(14)} />
          <SizedView style={styles_1.HorizontalLine} />
          <SizedView height={responsiveHeightPixel(14)} />

          <SeeTheAttachments DocumentURL={imgPath + item?.bill} />
        </>
      ) : null}
    </View>
  );
};

export default TilesEntrieEntrie;
