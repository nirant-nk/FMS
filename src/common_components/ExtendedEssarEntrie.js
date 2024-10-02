import {Text, View} from 'react-native';
import React from 'react';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import {CustomeText_14pt, CustomeText_18pt} from './TextComponents/CustomeText';
import SizedView from './SizedBox/SizedView';
import {imgPath} from '../../assets/constants/NetworkImage';
import {SeeTheAttachments, styles_1} from './Entrie_1';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';

const ExtendedEssarEntrie = ({item}) => {
  const {CurrentDevelopementSiteDetails} = useMyContext();
  const TYPE = CurrentDevelopementSiteDetails.current?.site_type;
  const TYPES = {
    apartment: `Flat ${item?.floor_flat?.name}`,
    duplex: `H${item?.floor_flat?.name}`,
    ploting: `Plot ${item?.floor_flat?.name}`,
  };
  return (
    <View style={styles_1.MainStyle}>
      <View style={styles_1.RowContainer}>
        <CustomeText_14pt
          TextData={`${TYPES[TYPE]}`}
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
            TextData={
              <>
                Paid By :{' '}
                <Text
                  style={{
                    color: '#0BA82B',
                  }}>
                  {item?.paid_by}
                </Text>
              </>
            }
          />
          <CustomeText_14pt TextData={'Receiver Name :'} />
          <CustomeText_14pt
            TextData={`${item?.receiver_name}`}
            style={styles_1.BoldText}
          />
        </View>
        <View style={{flex: 1, rowGap: responsiveHeightPixel(3)}}>
          <CustomeText_14pt TextData={`Remark : ${item?.remark}`} />

          {item?.payment_method ? (
            <CustomeText_14pt TextData={`Paid by : ${item?.payment_method}`} />
          ) : null}
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

export default ExtendedEssarEntrie;
