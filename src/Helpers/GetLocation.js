const GOOGLE_MAP_KEY = 'AIzaSyBORBBJbdy4aAlYE9tDrpYCaVikcZ7LQhE';
import Geolocation from 'react-native-geolocation-service';
import {
  PermissionsAndroid,
} from 'react-native';
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Need Location Permisstion',
        message:
          'App Needs Location permission to Proceed '
        ,
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    } else {
      console.log('Location permission denied');
      return false
    }
  } catch (err) {
    console.warn(err);
  }
};

export const getLocation = () => {
  return new Promise(async (resolve, reject) => {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        async position => {
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${GOOGLE_MAP_KEY}`
            );

            if (response.ok) {
              const data = await response.json();
              if (data.results && data.results.length > 0) {
                const address = data?.results[0]?.formatted_address;

                resolve({
                  Latitude: position.coords.latitude,
                  Longitude: position.coords.longitude,
                  Address: address,
                });
              } else {
                reject('No address ? found.');
              }
            } else {
              reject('Failed to fetch address data.');
            }
          } catch (error) {
            console.error('Error fetching address:', error);
            reject(error);
          }
        },
        error => {
          console.error('Geolocation error:', error);
          reject(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } else {
      console.warn('Need permission for Location');
      reject('Permission denied for location');
    }
  });
};
