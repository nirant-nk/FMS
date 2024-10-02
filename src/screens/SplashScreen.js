import {StyleSheet, ImageBackground, View} from 'react-native';
import {useEffect} from 'react';
import {IMAGES} from '../../assets/constants/ImageConstant';
import {responsiveHeightPixel} from '../Helpers/ResponsivePixel';
import DefaultWrap from '../wrappers/DefaultWrap';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {getToken} from '../network_storage_store/LocalDB/LocalDb';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (navigation.isFocused()) {
        //   const res = await getCheckloginApi();
        //   if (res?.data?.data?.status) {
        //     goToHome();
        //     UpdateLocationPostApi();
        //   } else {
        const token = await getToken();
        if (token) {
          goToHome();
        } else {
          navigation.replace('OnboardingScreen');
        }
        //   }
      }
    }, 1000);
  }, []); // Run this effect whenever props.visible changes
  const goToHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'CivilBookScreen',
        },
      ],
    });
  };
  return (
    <DefaultWrap>
      <View style={styles.container1}>
        <ImageBackground
          resizeMode="contain"
          source={IMAGES.BUDGET}
          style={[styles.LogoStyle]}
        />
      </View>
      <ImageBackground
        resizeMode="cover"
        source={IMAGES.BACKGROUND1}
        style={[styles.container2]}
      />
    </DefaultWrap>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  LogoStyle: {
    height: responsiveHeightPixel(123),
    width: responsiveHeightPixel(212),
    marginTop: responsiveHeight(15),
  },
  container2: {
    flex: 1,
  },
});
