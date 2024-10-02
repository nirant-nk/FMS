import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import {imgPath} from '../../assets/constants/NetworkImage';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {useNavigation} from '@react-navigation/native';
const RadioComponent = ({item, onSelect, selectedId}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        onSelect(item.id);
        if (item.id == 3) {
          setTimeout(() => {
            navigation.push('AfterPostClickStackGroup', {
              screen: 'ChooseCommunity',
            });
          }, 200);
        }
      }}
      style={{
        flexDirection: 'row',
        marginVertical: responsiveHeight(0.8),
        width: '100%',
        paddingHorizontal: responsiveHeight(0),
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        paddingRight: responsiveWidth(2),
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          resizeMode="contain"
          style={{height: responsiveHeight(2.5), width: responsiveWidth(7)}}
          source={item.image ? {uri: imgPath + item.image} : IMAGES.NOIMAGE}
        />
        <View>
          <Text
            onPress={item.onPress}
            style={[styles.textStyle, {marginHorizontal: responsiveHeight(1)}]}>
            {item.name}
          </Text>
          {item.description ? (
            <Text
              onPress={item.onPress}
              style={[
                styles.minitextStyle,
                {marginHorizontal: responsiveHeight(1)},
              ]}>
              {item.description}
            </Text>
          ) : null}
        </View>
      </View>
      <View style={[styles.radio, {borderColor: '#4DCF07'}]}>
        {selectedId == item.id && <View View style={styles.radiBg}></View>}
      </View>
    </Pressable>
  );
};

export default RadioComponent;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
  minitextStyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.2),
    fontWeight: '400',
    width: responsiveWidth(60),
  },
  textInputStyle: {
    color: '#3A1C67',
    fontSize: responsiveFontSize(1.7),
    marginHorizontal: responsiveHeight(1),
    width: responsiveWidth(25),
    height: responsiveHeight(4),
    padding: responsiveHeight(0.5),
  },
  dropdown: {
    width: responsiveWidth(31),
    height: responsiveHeight(1),
    marginVertical: responsiveHeight(1),
    borderRadius: responsiveHeight(1),
    paddingLeft: responsiveHeight(1),
    paddingRight: responsiveHeight(0.6),
    marginRight: responsiveHeight(1),
  },
  dropContainer: {
    width: responsiveWidth(35),
    height: responsiveHeight(15),
    borderRadius: responsiveHeight(1),
    marginTop: responsiveHeight(1),
    backgroundColor: 'white',
    borderWidth: responsiveHeight(0.1),
    borderColor: '#444',
  },
  placeholderStyle: {
    fontSize: responsiveFontSize(1.9),
    color: '#3A1C67',
  },
  customDropDownContainer: {
    // Customize the background color of the dropdown container
    paddingHorizontal: 0,
    color: '#3A1C67',
    paddingVertical: responsiveHeight(0),
    fontSize: responsiveFontSize(1.95),
  },
  radiBg: {
    backgroundColor: '#4DCF07',
    height: responsiveHeight(1.8),
    width: responsiveHeight(1.8),
    borderRadius: responsiveHeight(1.8 / 2),
  },
  radio: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    borderRadius: responsiveHeight(2),
    borderWidth: responsiveHeight(0.2),

    marginHorizontal: responsiveHeight(0),
    marginVertical: responsiveHeight(0.7),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
