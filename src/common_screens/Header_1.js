import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import LinearGradientView from '../wrappers/LinearGradientView';
import Icons from '../../assets/Icons/Icons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {
  CustomeText_12pt,
  CustomeText_18pt,
} from '../common_components/TextComponents/CustomeText';
import {useNavigation} from '@react-navigation/native';
import TextIconButton from '../common_components/Buttons/TextIconButton';
import IconCircleButton from '../common_components/Buttons/IconCircleButton';
import useModal from '../hooks/useModal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {FormatDate} from '../Helpers/FormatDatehelpers';
const Header_1 = ({
  BigTitle,
  SmallTitle,
  onBack,
  onPrint,
  onDocument,
  onSearch,
  onInformation,
  onSelectDate,
  onFolder,
  SelectedDate,
}) => {
  const {Visible, onOpen, onClose} = useModal();
  const navigation = useNavigation();
  const onBackDefault = () => {
    navigation.goBack();
  };
  return (
    <>
      <LinearGradientView
        style={styles.MainContainer}
        end={{x: 0, y: 0}}
        start={{x: 0, y: 1}}>
        <View style={styles.SubContainer}>
          <TouchableOpacity onPress={onBack || onBackDefault}>
            <Icons.Ionicons
              name={'arrow-back'}
              color={'black'}
              size={responsiveWidthPixel(35)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onBack || onBackDefault}
            style={{
              width: responsiveWidthPixel(onSelectDate ? 165 : 215),
            }}>
            {BigTitle ? (
              <CustomeText_18pt TextData={BigTitle} style={styles.Bold} />
            ) : null}
            {SmallTitle ? (
              <CustomeText_12pt TextData={SmallTitle} style={styles.Bold} />
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.SubContainer}>
          {onDocument ? (
            <TouchableOpacity onPress={onDocument}>
              <Image source={IMAGES.DOCS3} style={styles.IconImage} />
            </TouchableOpacity>
          ) : null}
          {onPrint ? (
            <TouchableOpacity onPress={onPrint}>
              <Image source={IMAGES.PRINT} style={styles.IconImage} />
            </TouchableOpacity>
          ) : null}
          {onSearch ? (
            <TouchableOpacity onPress={onSearch}>
              <Icons.AntDesign
                name={'search1'}
                color={'black'}
                size={responsiveWidth(8)}
              />
            </TouchableOpacity>
          ) : null}
          {onInformation ? (
            <TouchableOpacity onPress={onInformation}>
              <Icons.AntDesign
                name={'infocirlceo'}
                color={'black'}
                size={responsiveWidth(7)}
              />
            </TouchableOpacity>
          ) : null}
          {onSelectDate ? (
            <TextIconButton
              onPress={onOpen}
              ButtonStyle={styles.SelectDate}
              TextData={
                SelectedDate ? FormatDate(SelectedDate) : `--- select date ---`
              }
              TextStyle={{color: '#B4B4B4', fontSize: responsiveFontSize(1.4)}}
              Icon={
                <Icons.Feather
                  name={'calendar'}
                  size={responsiveHeightPixel(20)}
                  color="#B4B4B4"
                />
              }
            />
          ) : null}
          {onFolder ? (
            <IconCircleButton
              onPress={onFolder}
              ButtonStyle={styles.FolderButton}
              Icon={<Image source={IMAGES.FOLDER} style={styles.FolderImage} />}
            />
          ) : null}
        </View>
      </LinearGradientView>
      {Visible ? (
        <DateTimePickerModal
          isVisible={Visible}
          mode="date"
          onConfirm={date => {
            onClose();
            onSelectDate(date);
          }}
          onCancel={onClose}
        />
      ) : null}
    </>
  );
};

export default Header_1;

const styles = StyleSheet.create({
  MainContainer: {
    height: responsiveHeightPixel(97),
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: responsiveWidthPixel(15),
    alignItems: 'center',
    paddingHorizontal: responsiveWidthPixel(5),
  },
  IconImage: {
    height: responsiveHeightPixel(28),
    width: responsiveHeightPixel(30),
    resizeMode: 'contain',
  },
  Bold: {
    fontWeight: 'bold',
  },
  SubContainer: {
    flexDirection: 'row',
    columnGap: responsiveWidthPixel(15),
    alignItems: 'center',
  },
  SelectDate: {
    backgroundColor: 'black',
    borderRadius: 19,
    width: responsiveWidthPixel(130),
    // position: 'absolute',
    // right: 0,
  },
  FolderButton: {
    height: responsiveHeightPixel(36),
    width: responsiveHeightPixel(36),
    borderRadius: responsiveHeightPixel(36 / 2),
    backgroundColor: '#FFA000',
  },
  FolderImage: {
    height: responsiveHeightPixel(18),
    width: responsiveHeightPixel(18),
  },
});
