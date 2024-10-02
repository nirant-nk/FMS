import {PermissionsAndroid, Platform, ToastAndroid} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export const checkPermissionAndDownloadFile = async FILE_URL => {
  if (Platform.OS === 'ios') {
    downloadFile(FILE_URL);
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'Application needs access to your storage to download File',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Start downloading
        await downloadFile(FILE_URL);
        console.log('Storage Permission Granted.');
      } else {
        // If permission denied then show alert
        console.log('Error', 'Storage Permission Not Granted');
        if (Platform.Version >= 33) {
          await downloadFile(FILE_URL);
        }
      }
    } catch (err) {
      // To handle permission related exception
      console.log('++++' + err);
    }
  }
};

const downloadFile = async FILE_URL => {
  // Get today's date to add the time suffix in filename
  let date = new Date();

  // Function to get extention of the file url
  let file_ext = getFileExtention(FILE_URL);

  file_ext = '.' + file_ext[0];

  // config: To get response by passing the downloading related options
  // fs: Root directory path to download
  const {config, fs} = RNFetchBlob;
  let RootDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      path:
        RootDir +
        '/file_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        file_ext,
      description: 'downloading file...',
      notification: true,
      // useDownloadManager works with Android only
      useDownloadManager: true,
    },
  };
  config(options)
    .fetch('GET', FILE_URL)
    .then(res => {
      // Alert after successful downloading
      // console.log('res -> ', JSON.stringify(res));
      // alert('File Downloaded Successfully.');
      ToastAndroid.show('File Downloaded Successfully', ToastAndroid.SHORT);
    });
};

const getFileExtention = fileUrl => {
  // To get the file extension
  return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};
