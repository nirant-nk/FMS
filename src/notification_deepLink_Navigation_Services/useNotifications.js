import {useEffect} from 'react';
import {PermissionsAndroid, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import notifee, {AndroidStyle, EventType} from '@notifee/react-native';
import {navigateAfterClick} from './NavigationFunctions';

const useNotifications = () => {
  const getNotificationPermisstion = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      // console.warn({granted})
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return 'GRANTED';
      } else {
        return 'NOTGRANTED';
      }
    } catch (err) {
      console.warn(err);
      return 'NOTGRANTED';
    }
  };

  const StartNotificationServices = async () => {
    const PermissionRes = await getNotificationPermisstion();
    // console.warn({PermissionRes});
    if (PermissionRes == 'GRANTED') {
      const deviceMessageingToken = await getDeviceKey();
    } else {
      const deviceMessageingToken = await getDeviceKey();
    }
  };

  const getDeviceKey = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const deviceKey = await messaging().getToken();
    // console.warn({deviceKey});
    return deviceKey;
  };

  useEffect(() => {
    StartNotificationServices();
  }, []);

  // ? Foreground Message Data Received here when notification send
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('Message handled in the Foreground!', remoteMessage);
      if (remoteMessage?.data?.type == 'PersonalChat') {
        return unsubscribe;
      }
      DisplayNoftifications(
        remoteMessage?.notification?.title,
        remoteMessage?.notification?.body,
        {
          id: remoteMessage?.data?.id || '',
          type: remoteMessage?.data?.type || '',
          subType: remoteMessage?.data?.subType || '',
          community_id: remoteMessage?.data?.community_id || '',
          MyID: remoteMessage?.data?.MyID || '',
        },
      );
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    PushNotification.configure({
      onNotification: function (onClickedNotification) {
        console.warn('onClickedNotification', onClickedNotification);
        navigateAfterClick({
          NotificationType: onClickedNotification?.data?.type,
          info: {
            id: onClickedNotification?.data?.id || '',
            subType: onClickedNotification?.data?.subType || '',
            community_id: onClickedNotification?.data?.community_id || '',
            MyID: onClickedNotification?.data?.MyID || '',
          },
        });
      },
    });
    notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.PRESS:
          console.warn('onForegroundClick Notifee', detail);
          navigateAfterClick({
            NotificationType: detail?.notification?.data?.type,
            info: {
              id: detail?.notification?.data?.id || '',
              subType: detail?.notification?.data?.subType || '',
              community_id: detail?.data?.community_id || '',
              MyID: detail?.data?.MyID || '',
            },
          });
          break;
      }
    });

    notifee.onBackgroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.PRESS:
          console.warn('onBackgroundClick Notifee', detail);
          navigateAfterClick({
            NotificationType: detail?.notification?.data?.type,
            info: {
              id: detail?.notification?.data?.id || '',
              subType: detail?.notification?.data?.subType || '',
              community_id: detail?.data?.community_id || '',
              MyID: detail?.data?.MyID || '',
            },
          });
          break;
      }
    });
  }, []);

  const DisplayNoftifications = async (title, body, data) => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: title,
      body: body,
      android: {
        channelId,
        color: '#000000',
        smallIcon: 'ic_notification',
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
      data: data,
    });
  };

  return null;
};

export default useNotifications;
