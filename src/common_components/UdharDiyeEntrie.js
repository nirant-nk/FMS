import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles_1} from './Entrie_1';
import {
  CustomeText_12pt,
  CustomeText_14pt,
  CustomeText_16pt,
} from './TextComponents/CustomeText';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import SizedView from './SizedBox/SizedView';
import TextButtonUnbounded from './Buttons/TextButtonUnbounded';
import useModal from '../hooks/useModal';
import Collapsible from 'react-native-collapsible';
import {useNavigation} from '@react-navigation/native';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';

const UdharDiyeEntrie = ({type, item}) => {
  const navigation = useNavigation();
  const {CurrentUdharDiyeDetails, CurrentAccountRecovery} = useMyContext();
  useEffect(() => {
    CurrentAccountRecovery.current = item?.debited_from;
  }, []);

  return (
    <View style={[styles_1.MainStyle]}>
      <View style={styles_1.RowContainer}>
        <CustomeText_14pt TextData={`Date : ${item?.date || ''}`} />
        <View
          style={[
            styles_1.GrayBackRounded,
            {paddingVertical: responsiveHeightPixel(5)},
          ]}>
          <CustomeText_14pt TextData={`Amount : ${item?.amount || 0}`} />
        </View>
      </View>
      <SizedView height={responsiveHeightPixel(5)} />
      <SizedView style={styles_1.HorizontalLine} />
      <SizedView height={responsiveHeightPixel(8)} />

      <CustomeText_16pt TextData={`Who take : ${item?.who_take || ''}`} />
      <SizedView height={responsiveHeightPixel(2)} />

      <CustomeText_16pt
        TextData={`Mobile : +91 ${item?.mobile_number || ''}`}
      />
      <SizedView height={responsiveHeightPixel(2)} />

      <CustomeText_16pt TextData={`Return Date : ${item?.return_date || ''}`} />
      <SizedView height={responsiveHeightPixel(2)} />

      <CustomeText_16pt
        TextData={`Debited from account : ${item?.debited_from || ''}`}
      />
      <SizedView height={responsiveHeightPixel(5)} />

      {/* ConditionalRendering */}
      {type == 'UdharDiye' ? (
        <>
          <SizedView style={styles_1.HorizontalLine} />
          <SizedView height={responsiveHeightPixel(8)} />
          <TextButtonUnbounded
            TextData={'Add recovery amount'}
            ButtonStyle={styles.ButtonStyle}
            onPress={() => {
              CurrentUdharDiyeDetails.current = item;
              navigation.navigate('AddUdharRecoveryScreen');
            }}
          />
        </>
      ) : null}
      {type == 'UdharRecovery' ? <ExtendedRecoveryEntrie item={item} /> : null}
    </View>
  );
};

export default UdharDiyeEntrie;

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: '#CCCCCC',
    height: responsiveHeightPixel(38),
    borderRadius: 5,
  },
});

const ExtendedRecoveryEntrie = ({item}) => {
  const {Toggle, Visible} = useModal(false);

  console.warn;

  return (
    <>
      {item?.recovery?.length ? (
        <>
          <SizedView height={responsiveHeightPixel(10)} />
          <CustomeText_12pt
            TextData={Visible ? `Hide all entries` : 'Udhar Recovery List'}
            style={{
              color: '#058423',
              fontWeight: 'bold',
              alignSelf: 'flex-end',
            }}
            onPress={Toggle}
          />
        </>
      ) : null}

      <Collapsible collapsed={!Visible}>
        {item?.recovery?.map(item2 => {
          return (
            <>
              <SizedView height={responsiveHeightPixel(10)} />
              <SizedView style={styles_1.HorizontalLine} />
              <SizedView height={responsiveHeightPixel(10)} />
              <View style={styles_1.RowContainer}>
                <CustomeText_14pt TextData={`Date : ${item2?.date}`} />

                <CustomeText_12pt
                  TextData={`Bill number : ${item2?.bill_no || 0}`}
                  style={styles_1.BoldText}
                />
              </View>
              <SizedView height={responsiveHeightPixel(10)} />

              <CustomeText_16pt
                TextData={`Received Recovery amount : ${
                  item2.recovery_amount || 0
                }`}
              />
              <SizedView height={responsiveHeightPixel(2)} />

              <CustomeText_16pt
                TextData={`Remaining Recovery amount : ${
                  item2.remaining_recovery || 0
                }`}
              />
              <SizedView height={responsiveHeightPixel(2)} />

              <CustomeText_16pt
                TextData={`Added to account : ${item2?.who_take}`}
              />
              <SizedView height={responsiveHeightPixel(2)} />
            </>
          );
        })}
      </Collapsible>
    </>
  );
};
