import {useEffect} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import NavigationService from './NavigationService';
import {
  navigateCommunityPostsScreen,
  navigateToCommunityProfileScreen,
  navigateToHomeScreen,
} from './NavigationFunctions';
import {Linking} from 'react-native';
import queryString from 'query-string';
export const useDinamicLinks = () => {
  const afterLink = url => {
    // Parse the URL
    const parsedUrl = queryString.parseUrl(url);

    // Access the query parameters
    console.log(parsedUrl.query);
    // // Output the specific parameter values
    // console.log(parsedUrl.query.utm_campaign);
    // console.log(parsedUrl.query.link);

    const Props = extractParamsFromLink(parsedUrl.query.link);
    console.warn({Props});
    setTimeout(() => {
      if (Props?.id && Props?.cid) {
        navigateCommunityPostsScreen({id: Props?.id, community_id: Props?.cid});
      } else if (Props?.id) {
        navigateToHomeScreen({id: Props?.id});
      } else if (Props?.cid) {
        navigateToCommunityProfileScreen({community_id: Props?.cid});
      }
    }, 500);
  };

  const linking = {
    prefixes: ['myapp://', 'https://', 'https://myapp.com'],

    // Custom function to get the URL which was used to open the app
    async getInitialURL() {
      // First, you would need to get the initial URL from your third-party integration
      // The exact usage depend on the third-party SDK you use
      // For example, to get the initial URL for Firebase Dynamic Links:
      // const {isAvailable} = utils().playServicesAvailability;

      if (true) {
        const initialLink = await dynamicLinks().getInitialLink();
        if (initialLink) {
          afterLink(initialLink);
          return initialLink.url;
        }
      }

      // As a fallback, you may want to do the default deep link handling
      const url = await Linking.getInitialURL();
      if (url) {
        afterLink(url);
      }
      return url;
    },

    // Custom function to subscribe to incoming links
    subscribe(listener) {
      // Listen to incoming links from Firebase Dynamic Links
      const unsubscribeFirebase = dynamicLinks().onLink(({url}) => {
        if (url) {
          afterLink(url);
        }
        listener(url);
      });

      // Listen to incoming links from deep linking
      const linkingSubscription = Linking.addEventListener('url', ({url}) => {
        if (url) {
          afterLink(url);
        }
        listener(url);
      });

      return () => {
        // Clean up the event listeners
        unsubscribeFirebase();
        linkingSubscription.remove();
      };
    },

    // config: {
    //   // Deep link configuration
    // },
  };

  // useEffect(() => {
  //   const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = dynamicLinks().getInitialLink().then(handleDynamicLink);
  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

  //   // Check if unsubscribe is a function before calling it
  //   if (typeof unsubscribe === 'function') {
  //     return () => unsubscribe();
  //   }

  //   // Handle the case where unsubscribe is not a function (maybe an object)
  //   return () => console.error('unsubscribe is not a function');
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = dynamicLinks().getInitialLink().then(handleDynamicLink);

  //   // Check if unsubscribe is a function before calling it
  //   if (typeof unsubscribe === 'function') {
  //     return () => unsubscribe();
  //   }

  //   // Handle the case where unsubscribe is not a function (maybe an object)
  //   return () => console.error('unsubscribe is not a function');
  // }, []);

  return {linking};
};

export async function buildLink(queryParams) {
  let link = `https://socialappdynamiclink.page.link/social`;
  if (queryParams) {
    const queryString = Object.keys(queryParams)
      .map(
        key =>
          `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`,
      )
      .join('&');
    link += `?${queryString}`;
  }

  const Dlink = await dynamicLinks().buildLink({
    link: link,
    // domainUriPrefix is created in your Firebase console
    domainUriPrefix: 'https://socialappdynamiclink.page.link',
    // optional setup which updates Firebase analytics campaign
    // "banner". This also needs setting up before hand
    // analytics: {
    //   campaign: 'banner',
    // },
  });
  // console.warn(link);
  return Dlink;
}

const extractParamsFromLink = linkUrl => {
  const params = {};
  const queryString = linkUrl.split('?')[1]; // Get the query string part of the URL

  if (queryString) {
    const keyValuePairs = queryString.split('&');
    keyValuePairs.forEach(pair => {
      const [key, value] = pair.split('=');
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
  }
  return params;
};
