import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CustomeText_14pt} from '../TextComponents/CustomeText';
import Icons from '../../../assets/Icons/Icons';
import {Text_Input_Styles} from './Text_Input_1';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
import {recognizePrefixSuffix} from 'react-native-reanimated/lib/typescript/reanimated2/animation/util';

const Dropdown_1 = ({
  handleInputChange,
  Placeholder,
  Error,
  FormObjName,
  Title,
  onDropdown,
  MainContainer,
  NameField,
  IDField,
  SelectedOptionID,
  data,
  Disable,
}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isFocus, setIsFocus] = useState(false);

  // console.warn({});

  return (
    <>
      <View style={[{width: '100%'}, MainContainer]}>
        {Title ? <CustomeText_14pt TextData={Title} /> : null}
        <View
          style={[
            Text_Input_Styles.MainView,
            {
              alignItems: 'center',
              height: responsiveHeightPixel(50),
              borderColor: Error ? 'red' : '#00000066',
              borderWidth: Error ? 1 : 0,
            },
          ]}>
          {/* <TextInput
            style={[Text_Input_Styles.TextInputstyle]}
            placeholder={Placeholder}
            value={Value}
            editable={Editable}
          /> */}

          <Dropdown
            disable={Disable}
            mode="auto"
            itemContainerStyle={styles2.itemContainer}
            itemTextStyle={styles2.itemText}
            containerStyle={styles2.dropContainer}
            dropdownPosition="auto"
            style={styles2.dropdown}
            placeholderStyle={styles2.placeholderStyle}
            selectedTextStyle={styles2.selectedTextStyle}
            inputSearchStyle={styles2.inputSearchStyle}
            iconStyle={styles2.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField={NameField} //name
            valueField={IDField} //id
            placeholder={!isFocus ? Placeholder : '...'}
            searchPlaceholder={'Search'}
            value={SelectedOptionID}
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              if (
                (FormObjName == 'DebitedAccount' ||
                  FormObjName == 'ContractSite') &&
                item[IDField] == 9999 &&
                (route?.name == 'AddContractIndividualExpensesScreen' ||
                  route?.name == 'AddKharchaScreen' ||
                  route?.name == 'AddUchalScreen' ||
                  route?.name == 'AddUdharDiyeScreen' ||
                  route?.name == 'DocumentCivilBookScreen' ||
                  route?.name == 'AddUdharRecoveryScreen')
              ) {
                navigation.navigate('AddContractScreen', {
                  AfterAdd: (id, name) => {
                    handleInputChange(FormObjName, name);
                    handleInputChange(FormObjName + 'ID', id);
                  },
                });
                return;
              }
              handleInputChange(FormObjName, item[NameField]);
              handleInputChange(FormObjName + 'ID', item[IDField]);
            }}
            renderRightIcon={() => (
              <Icons.MaterialIcons
                name={isFocus ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                color="#9E9E9E"
                size={responsiveHeightPixel(30)}
                // style={{marginRight: responsiveWidth(2)}}
              />
            )}
          />

          {onDropdown ? (
            <TouchableOpacity
              onPress={onDropdown}
              style={{position: 'absolute', right: responsiveWidth(3)}}>
              <Icons.MaterialIcons
                name={'keyboard-arrow-down'}
                size={responsiveHeightPixel(30)}
                color="#9E9E9E"
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {Error && <Text style={Text_Input_Styles.ErrorMsg}>{Error}</Text>}
      </View>
    </>
  );
};

export default memo(Dropdown_1);

const styles2 = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // backgroundColor: "gray",
    paddingTop: 16,
    // backgroundColor:"red",
  },
  dropContainer: {
    borderRadius: 8,
    marginTop: responsiveHeightPixel(10),
    marginBottom: responsiveHeight(1),
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#444',
    overflow: 'hidden',
  },

  itemText: {
    padding: 0,
    margin: 0,
    height: responsiveHeight(5),
    paddingTop: responsiveHeight(1),
  },
  itemContainer: {
    height: responsiveHeight(6),
    // backgroundColor:"red",
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 0,
    margin: 0,
  },
  dropdown: {
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: responsiveWidthPixel(15),
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: responsiveFontSize(1.8),
  },
  selectedTextStyle: {
    fontSize: responsiveFontSize(1.8),
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: responsiveFontSize(1.8),
    borderRadius: 5,
  },
});
