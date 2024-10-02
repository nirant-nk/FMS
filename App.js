import {StatusBar, Platform} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
// import useNotifications from './src/notification_deepLink_Navigation_Services/useNotifications';
// import {useDinamicLinks} from './src/notification_deepLink_Navigation_Services/useDinamicLinks';

const App = () => {
  StatusBar.setBarStyle('dark-content');
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setTranslucent(true);
  }
  // useNotifications();

  return <AppNavigation />;
};

export default App;
