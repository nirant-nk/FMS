import {Text, View} from 'react-native';
import React from 'react';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {CustomeText_14pt, CustomeText_18pt} from './TextComponents/CustomeText';
import SizedView from './SizedBox/SizedView';
import {imgPath} from '../../assets/constants/NetworkImage';
import {SeeTheAttachments, styles_1} from './Entrie_1';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const NotInContactEntrie = ({item}) => {
  return (
    <View style={styles_1.MainStyle}>
      <View style={styles_1.RowContainer}>
        <CustomeText_14pt
          TextData={`Bill Number : ${item?.not_in_contract?.bill_number}`}
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
            TextData={`Karagir Qty : ${item?.not_in_contract?.karagir_quantity}`}
          />
          <CustomeText_14pt
            TextData={`Hardware Name : ${item?.not_in_contract?.hardware_name}`}
          />
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
          {item?.payment_method ? (
            <CustomeText_14pt TextData={`Paid by : ${item?.payment_method}`} />
          ) : null}
        </View>
        <View style={{flex: 1, rowGap: responsiveHeightPixel(3)}}>
          <CustomeText_14pt
            TextData={`Helper Qty : ${item?.not_in_contract?.helper_quantity}`}
          />
          <CustomeText_14pt
            TextData={`Gadi Bhade / Hamali : ₹${item?.not_in_contract?.hamali}`}
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

export default NotInContactEntrie;
