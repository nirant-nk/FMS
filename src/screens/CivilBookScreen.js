import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import { IMAGES } from '../../assets/constants/ImageConstant';
import { responsiveHeightPixel } from '../Helpers/ResponsivePixel';
import { showMiniMessage } from '../Helpers/ShowMiniModalsHelpers';
import GradientIconCircleButton from '../common_components/Buttons/GradientIconCircleButton';
import IconCircleButton from '../common_components/Buttons/IconCircleButton';
import IconTextButton from '../common_components/Buttons/IconTextButton';
import SizedView from '../common_components/SizedBox/SizedView';
import {
  CustomeText_12pt,
  CustomeText_16pt,
  CustomeText_18pt,
  CustomeText_24pt,
} from '../common_components/TextComponents/CustomeText';
import EditProfileModal from '../components/Modals/EditProfileModal';
import LogoutModal from '../components/Modals/LogoutModal';
import { db } from '../hooks/PersonalBook/useAddKharcha';
import useModal from '../hooks/useModal';
import { getToken } from '../network_storage_store/LocalDB/LocalDb';
import DefaultWrap from '../wrappers/DefaultWrap';
import LinearGradientView from '../wrappers/LinearGradientView';
const BorderWithFlatlist = 0.8;
const CivilBookScreen = ({navigation}) => {
  const [userData, setUserData] = useState();
  const route = useRoute();
  const {
    Visible: LogoutVisible,
    onOpen: LogoutOpen,
    onClose: LogoutClose,
  } = useModal(false);
  const {
    Visible: EditProfileVisible,
    onOpen: EditProfileOpen,
    onClose: EditProfileClose,
  } = useModal(false);

  const Options = [
    {
      Icon: <Image source={IMAGES.DOCS1} style={styles.IconImage} />,
      Name: 'Income Sources',
      style: {
        borderRightWidth: BorderWithFlatlist,
        borderBottomWidth: BorderWithFlatlist,
      },
      onPress: () =>
        navigation.navigate('IncomeSourcesScreen', {type: 'Income Sources'}),
      permission: true,
    },
    {
      Icon: <Image source={IMAGES.SUPERVISION} style={styles.IconImage} />,
      Name: 'Expence Sources',
      style: {
        borderLeftWidth: BorderWithFlatlist,
        borderBottomWidth: BorderWithFlatlist,
      },
      onPress: () =>
        navigation.navigate('IncomeSourcesScreen', {type: 'Expence Sources'}),
      permission: true,
    },
    {
      Icon: <Image source={IMAGES.BOOK} style={styles.IconImage} />,
      Name: 'Loans Section',
      style: {
        borderRightWidth: BorderWithFlatlist,
        borderTopWidth: BorderWithFlatlist,
        borderBottomWidth: BorderWithFlatlist,
      },
      onPress: () =>
        navigation.navigate('IncomeSourcesScreen', {type: 'Loans Section'}),
      permission: true,
    },
    {
      Icon: <Image source={IMAGES.WORKER} style={styles.IconImage} />,
      Name: 'Investments & Savings',
      style: {
        borderLeftWidth: BorderWithFlatlist,
        borderTopWidth: BorderWithFlatlist,
        borderBottomWidth: BorderWithFlatlist,
      },
      onPress: () =>
        navigation.navigate('IncomeSourcesScreen', {
          type: 'Investments & Savings',
        }),
      permission: true,
    },
    {
      Icon: <Image source={IMAGES.DOCS2} style={styles.IconImage} />,
      Name: 'Other Sources',
      style: {
        borderRightWidth: BorderWithFlatlist,
        borderTopWidth: BorderWithFlatlist,
      },
      onPress: () =>
        navigation.navigate('IncomeSourcesScreen', {type: 'Other Sources'}),
      permission: true,
    },
    {
      Icon: (
        <Icons.MaterialIcons
          name={'currency-rupee'}
          color={'black'}
          size={responsiveWidth(6)}
        />
      ),
      Name: 'Statsistics',
      style: {
        borderLeftWidth: BorderWithFlatlist,
        borderTopWidth: BorderWithFlatlist,
      },
      onPress: () => showMiniMessage({message: 'Comming Soon', type: 'info'}),
      permission: true,
    },
  ];

  const filteredOptions = Options.filter(option => {
    return option.permission;
  });

  const getEntryByMobileNumber = async () => {
    const mobileNumber = await getToken();
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM users WHERE mobile_number = ?',
        [mobileNumber],
        (tx, results) => {
          if (results.rows.length > 0) {
            const entry = {
              id: results.rows.item(0).id,
              name: results.rows.item(0).name,
              mobileNumber: results.rows.item(0).mobile_number,
            };
            setUserData(entry); // Pass the retrieved entry back to the caller
          } else {
            console.log('No entry found for the given mobile number.');
          }
        },
        error => {
          console.log('Error retrieving entry: ', error);
        },
      );
    });
  };

  useEffect(() => {
    getEntryByMobileNumber();
  }, []);
  return (
    <>
      <LinearGradientView
        style={[
          StyleSheet.absoluteFill,
          styles.GradientStyle,
        ]}></LinearGradientView>
      <DefaultWrap style={styles.MainStyle}>
        <View style={styles.HeaderContainer}>
          <CustomeText_24pt
            TextData={'Finance Buddy'}
            style={styles.BoldText}
          />

          <IconCircleButton
            ButtonStyle={styles.ExitButton}
            onPress={LogoutOpen}
            Icon={
              <Icons.MaterialCommunityIcons
                name={'location-exit'}
                color={'black'}
                size={responsiveWidth(6)}
              />
            }
          />
        </View>
        <View style={styles.ProfileContainer}>
          <Image source={IMAGES.USER} style={styles.ProfileImage} />
        </View>
        <SizedView height={responsiveHeightPixel(11)} />
        <View style={styles.NameContainer}>
          <CustomeText_18pt
            TextData={userData?.name || 'Anonymous'}
            style={styles.BoldText}
          />
          <IconCircleButton
            ButtonStyle={styles.EditButton}
            onPress={EditProfileOpen}
            Icon={
              <Icons.Entypo
                name={'edit'}
                color={'white'}
                size={responsiveWidth(2)}
              />
            }
          />
        </View>
        <CustomeText_12pt
          TextData={`+91 ${userData?.mobileNumber}`}
          style={[styles.BoldText, {marginTop: responsiveHeightPixel(3)}]}
        />
        <SizedView height={responsiveHeightPixel(32)} />

        <View style={{flex: 1, width: '100%'}}>
          <FlatList
            numColumns={2}
            contentContainerStyle={styles.OptionsContainer}
            data={filteredOptions}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[styles.OptionContainer]}
                onPress={item.onPress}>
                <GradientIconCircleButton Icon={item.Icon} />
                <CustomeText_16pt TextData={item.Name} />
              </TouchableOpacity>
            )}
          />
        </View>
        <SizedView height={responsiveHeightPixel(30)} />
        <View style={styles.TwoButtonsContainer}>
          <IconTextButton
            TextData={'Search'}
            Icon={
              <Icons.AntDesign
                name={'search1'}
                color={'white'}
                size={responsiveWidth(6)}
              />
            }
            ButtonStyle={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
          />
          <IconTextButton
            TextData={'Notification'}
            Icon={
              <Icons.Ionicons
                name={'notifications-outline'}
                color={'white'}
                size={responsiveWidth(6)}
              />
            }
            ButtonStyle={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
          />
        </View>
        <SizedView height={responsiveHeightPixel(24)} />
      </DefaultWrap>
      {LogoutVisible ? (
        <LogoutModal onRequestClose={LogoutClose} visible={LogoutVisible} />
      ) : null}
      {EditProfileVisible ? (
        <EditProfileModal
          onRequestClose={EditProfileClose}
          visible={EditProfileVisible}
          updateData={getEntryByMobileNumber}
        />
      ) : null}
    </>
  );
};

export default CivilBookScreen;

const styles = StyleSheet.create({
  GradientStyle: {
    opacity: 0.2,
  },
  MainStyle: {
    backgroundColor: null,
    alignItems: 'center',
  },
  BoldText: {
    fontWeight: 'bold',
  },
  HeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: responsiveHeightPixel(44 + 17),
    justifyContent: 'center',
    marginBottom: responsiveHeightPixel(18),
    width: '100%',
  },
  NameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  ExitButton: {
    height: responsiveHeightPixel(36),
    width: responsiveHeightPixel(36),
    borderRadius: responsiveHeightPixel(36 / 2),
    position: 'absolute',
    right: responsiveHeightPixel(16),
  },
  AccessButton: {
    height: responsiveHeightPixel(36),
    width: responsiveHeightPixel(36),
    borderRadius: responsiveHeightPixel(36 / 2),
    position: 'absolute',
    left: responsiveHeightPixel(16),
  },
  ProfileContainer: {
    backgroundColor: 'white',
    height: responsiveHeightPixel(92),
    width: responsiveHeightPixel(92),
    borderRadius: responsiveHeightPixel(92 / 2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileImage: {
    height: responsiveHeightPixel(74),
    width: responsiveHeightPixel(74),
    borderRadius: responsiveHeightPixel(74 / 2),
  },
  EditButton: {
    height: responsiveHeightPixel(18),
    width: responsiveHeightPixel(18),
    borderRadius: responsiveHeightPixel(18 / 2),
    position: 'absolute',
    right: responsiveHeightPixel(107),
    backgroundColor: 'black',
  },
  OptionsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    overflow: 'hidden',
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: '1%',
  },
  OptionContainer: {
    width: '50%',
    height: responsiveHeightPixel(137),
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: responsiveHeightPixel(16),
    borderColor: '#E9E9E9',
    borderWidth: BorderWithFlatlist,
  },
  IconImage: {
    height: responsiveHeightPixel(23),
    width: responsiveHeightPixel(27),
    resizeMode: 'contain',
  },
  TwoButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 2,
  },
});
