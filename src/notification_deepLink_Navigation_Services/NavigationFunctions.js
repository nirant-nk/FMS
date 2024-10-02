import {useEffect} from 'react';
import NavigationService from './NavigationService';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';

export async function navigateToCommentsScreen({subType, id}) {
  await navigateToHomeScreen();
  await NavigationService.navigate('CommentsScreen', {
    type: subType,
    PostID: id,
  });
}

export async function navigateToCommentsScreen2({subType, id}) {
  await NavigationService.navigate('CommentsScreen', {
    type: subType,
    PostID: id,
  });
}

export async function navigateToReviewGotScreen(info) {
  navigateToHomeScreen();
  NavigationService.navigate('AfterPostClickStackGroup', {
    screen: 'ReviewGotScreen',
    params: {
      PostID: info?.id,
    },
  });
}

export async function navigateToNotificationScreen() {
  console.log('Navigating to Notification Screen');
  await navigateToHomeScreen();
  await NavigationService.navigate('AfterPostClickStackGroup', {
    screen: 'Notification',
  });
}

export async function navigateToMyCircleScreen() {
  NavigationService.reset({
    index: 0,
    routes: [
      {
        name: 'DrawerGroup',
        state: {
          routes: [
            {
              name: 'TabGroup',
              state: {
                routes: [
                  {
                    name: 'CircleStrengthGroup',
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  });
}

export async function navigateToHomeScreen(info) {
  await NavigationService.reset({
    index: 0,
    routes: [
      {
        name: 'DrawerGroup',
        state: {
          routes: [
            {
              name: 'TabGroup',
              state: {
                routes: [
                  {
                    name: 'HomeGroup',
                    state: {
                      routes: [
                        {
                          name: 'HomeScreen',
                          params: info,
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  });
}

export async function navigateCommunityPostsScreen(info) {
  await NavigationService.reset({
    index: 0,
    routes: [
      {
        name: 'DrawerGroup',
        state: {
          routes: [
            {
              name: 'TabGroup',
              state: {
                routes: [
                  {
                    name: 'CommunityTabsStackGroup',
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  });
  NavigationService.navigate('NavigateToCommunityPost', info);
}
export async function navigateCommunityChatsScreen(info) {
  await NavigationService.reset({
    index: 0,
    routes: [
      {
        name: 'DrawerGroup',
        state: {
          routes: [
            {
              name: 'TabGroup',
              state: {
                routes: [
                  {
                    name: 'CommunityTabsStackGroup',
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  });
  NavigationService.navigate('NavigateToCommunityChat', info);
}

export async function navigateToChatScreen(info) {
  navigateToHomeScreen();
  NavigationService.navigate('NavigateToPersonalChat', info);
}

export async function navigateToCommunityProfileScreen(info) {
  navigateToHomeScreen();
  NavigationService.navigate('NavigateToCommunityProfile', info);
}

export async function navigateAfterClick({NotificationType, info, Append}) {
  switch (NotificationType) {
    case 'FriendRequest':
      navigateToMyCircleScreen();
      break;
    case 'comment':
      if (Append) {
        navigateToCommentsScreen2(info);
      } else {
        navigateToCommentsScreen(info);
      }

      break;
    case 'Post':
      if (Append) {
        navigateToCommentsScreen2(info);
      } else {
        navigateToCommentsScreen(info);
      }
      break;
    case 'CommunityPost':
      navigateCommunityPostsScreen(info);
      break;
    case 'CommunityChat':
      navigateCommunityChatsScreen(info);
      break;
    case 'PersonalChat':
      navigateToChatScreen(info);
      break;
    case 'Review':
      navigateToReviewGotScreen(info);
      break;

    default:
      navigateToNotificationScreen();
      break;
  }
}

export const NavigateToCommunityPost = ({navigation, route}) => {
  const {CurrentCommunityID} = useMyContext();
  const navigateNow = async () => {
    CurrentCommunityID.current = route?.params?.community_id;
    navigation.replace('CommunityTabsGroup', {
      screen: 'CommunityPostsScreen',
      params: {
        id: route?.params?.id,
      },
    });
  };
  useEffect(() => {
    navigateNow();
  }, []);
  return null;
};

export const NavigateToCommunityChat = ({navigation, route}) => {
  const {CurrentCommunityID} = useMyContext();
  const navigateNow = async () => {
    CurrentCommunityID.current = route?.params?.community_id;
    navigation.replace('CommunityTabsGroup', {
      screen: 'CommunityChatScreen',
    });
  };
  useEffect(() => {
    navigateNow();
  }, []);
  return null;
};

export const NavigateToPersonalChat = ({navigation, route}) => {
  const {CurrentOthersUserID} = useMyContext();
  const navigateNow = async () => {
    CurrentOthersUserID.current = route?.params?.id;
    navigation.replace('ChatScreen', {
      user1: route?.params?.MyID,
      user2: route?.params?.id,
    });
  };
  useEffect(() => {
    navigateNow();
  }, []);
  return null;
};

export const NavigateToCommunityProfile = ({navigation, route}) => {
  const {CurrentCommunityID} = useMyContext();
  const navigateNow = async () => {
    CurrentCommunityID.current = route?.params?.community_id;
    navigation.replace('CommunityProfileTabsGroup', {
      screen: 'AboutCommunityScreen',
    });
  };
  useEffect(() => {
    navigateNow();
  }, []);
  return null;
};
