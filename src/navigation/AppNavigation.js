import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import MyProvider from '../network_storage_store/context_store/MyProvider';

import FlashMessage from 'react-native-flash-message';
import SplashScreen from '../screens/SplashScreen';
import NavigationService from '../notification_deepLink_Navigation_Services/NavigationService';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AddKharchaScreen from '../screens/AddKharchaScreen';
import KharchaListingScreen from '../screens/KharchaListingScreen';
import {Easing} from 'react-native';

import IncomeSourcesScreen from '../screens/IncomeSourcesScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginAndRegisterScreen from '../screens/LoginAndRegisterScreen';
import CivilBookScreen from '../screens/CivilBookScreen';
const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.03,
    restSpeedThreshold: 0.05,
  },
};
const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

function FirstStackGroup() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      // initialRouteName="SupervisionSitesScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        name="IncomeSourcesScreen"
        component={IncomeSourcesScreen}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,

          transitionSpec: {
            open: config,
            close: closeConfig,
          },
        }}
        name="AddKharchaScreen"
        component={AddKharchaScreen}
      />
      <Stack.Screen
        name="KharchaListingScreen"
        component={KharchaListingScreen}
      />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,

          transitionSpec: {
            open: config,
            close: closeConfig,
          },
        }}
        name="LoginAndRegisterScreen"
        component={LoginAndRegisterScreen}
      />
      <Stack.Screen
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureDirection: 'vertical-inverted',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
        }}
        name="CivilBookScreen"
        component={CivilBookScreen}
      />
    </Stack.Navigator>
  );
}

const AppNavigation = () => {
  // const {linking} = useDinamicLinks();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MyProvider>
        <NavigationContainer
          // linking={linking}
          ref={ref => NavigationService.setTopLevelNavigator(ref)}>
          <FirstStackGroup />
        </NavigationContainer>
        <FlashMessage position="center" />
      </MyProvider>
    </GestureHandlerRootView>
  );
};

export default AppNavigation;
