import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid, Platform} from 'react-native';
const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
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

const requestGalleryImagesPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
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

const requestGalleryVideosPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
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

export const ImagePicker = async imageLimit => {
  try {
    return new Promise(async (resolve, reject) => {
      const permissionRes = await requestGalleryImagesPermission();
      console.warn(permissionRes);
      if (permissionRes === 'GRANTED') {
        let options = {
          selectionLimit: imageLimit,
          mediaType: 'photo',
          storageOptions: {
            path: 'image',
          },
          quality: 0.2,
        };
        launchImageLibrary(options, response => {
          if (response.assets) {
            // console.warn(response.assets);
            resolve(response.assets);
          } else {
            reject(new Error('Failed to select image'));
          }
        });
      }
    });
  } catch (error) {
    throw error;
  }
};

export const VideoPicker = async imageLimit => {
  try {
    return new Promise(async (resolve, reject) => {
      const permissionRes = await requestGalleryVideosPermission();
      console.warn({permissionRes});
      if (permissionRes === 'GRANTED') {
        let options = {
          selectionLimit: imageLimit,
          mediaType: 'video',
          storageOptions: {
            path: 'image',
          },
          quality: 0.2,
        };
        launchImageLibrary(options, response => {
          if (response.assets) {
            // console.warn(response.assets);
            resolve(response.assets);
          } else {
            reject(new Error('Failed to select image'));
          }
        });
      }
    });
  } catch (error) {
    throw error;
  }
};

export const CameraImagePicker = async imageLimit => {
  try {
    return new Promise(async (resolve, reject) => {
      const permissionRes = await requestCameraPermission();
      if (permissionRes === 'GRANTED') {
        await requestCameraPermission();
        let options = {
          selectionLimit: imageLimit,
          mediaType: 'photo',
          storageOptions: {
            path: 'image',
          },
          quality: 0.2,
        };
        launchCamera(options, response => {
          if (response.assets) {
            // console.warn(response.assets);
            resolve(response.assets);
          } else {
            reject(new Error('Failed to select image'));
          }
        });
      }
    });
  } catch (error) {
    throw error;
  }
};

export const CameraVideoPicker = async imageLimit => {
  try {
    return new Promise(async (resolve, reject) => {
      const permissionRes = await requestCameraPermission();
      if (permissionRes === 'GRANTED') {
        let options = {
          selectionLimit: imageLimit,
          mediaType: 'video',
          storageOptions: {
            path: 'image',
          },
          quality: 0.2,
        };
        launchCamera(options, response => {
          if (response.assets) {
            // console.warn(response.assets);
            resolve(response.assets);
          } else {
            reject(new Error('Failed to select image'));
          }
        });
      }
    });
  } catch (error) {
    throw error;
  }
};
