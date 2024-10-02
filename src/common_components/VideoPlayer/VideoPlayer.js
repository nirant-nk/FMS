import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState, memo} from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import {Pressable} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const VideoPlayer = ({VideoPath, ImagePath, SeekDuration}) => {
  // console.warn({VideoPath});
  const [progress, setProgress] = useState(`${0}:${1}`);
  const [clicked, setClicked] = useState(true);
  const [puased, setPaused] = useState(false);
  // const [fullScreen, setFullScreen] = useState(false);

  const [Mute, setMute] = useState(false);
  const ref = useRef();
  const format = seconds => {
    if (isNaN(seconds) || typeof seconds !== 'number') {
      return '00:00'; // or any other default value you prefer
    }

    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');

    return `${mins}:${secs}`;
  };

  return (
    <View style={{backgroundColor: 'black', width: '100%'}}>
      <Pressable
        style={{
          width: '100%',
          height: '100%',
          // height: fullScreen ? '100%' : responsiveHeight(25),
        }}
        onPress={() => {
          // console.warn('Hi');
          setClicked(true);
        }}>
        {VideoPath ? (
          <Video
            // fullscreen={fullScreen}
            fullscreenAutorotate
            // onLoadStart={HI2}
            onReadyForDisplay={() => {
              ref.current.seek(SeekDuration || 0);
            }}
            onBuffer={e => {
              console.warn(e);
            }}
            onEnd={() => {
              ref.current.seek(0);
              setPaused(true);
            }}
            poster={ImagePath}
            audioOutput={'speaker'}
            paused={puased}
            source={{
              uri: VideoPath,
            }}
            ref={ref}
            onProgress={x => {
              // console.log(x);
              setProgress(x);
            }}
            muted={Mute}
            style={{
              width: '100%',
              height: '100%',
              // height: responsiveHeight(fullScreen ? 100 : 25),
            }}
            resizeMode="contain"
            progressUpdateInterval={1000}
          />
        ) : null}
        {clicked && (
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setClicked(false)}>
            <View style={{flexDirection: 'row'}}>
              {/* <TouchableOpacity
                onPress={() => {
                  ref.current.seek(parseInt(progress.currentTime) - 10);
                }}>
                <Image
                  source={require('./backward.png')}
                  style={{width: 30, height: 30, tintColor: 'white'}}
                />
              </TouchableOpacity> */}
              <Pressable
                onPress={() => {
                  setPaused(!puased);
                  if (puased) {
                    setClicked(false);
                  }
                }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: responsiveHeight(5),
                  elevation: 9,
                }}>
                <Image
                  resizeMode="contain"
                  source={
                    puased
                      ? require('./play-button.png')
                      : require('./pause.png')
                  }
                  style={{
                    width: responsiveHeight(8),
                    height: responsiveHeight(8),
                    // tintColor: 'black',
                    // marginLeft: 50,
                  }}
                />
              </Pressable>
              {/* <TouchableOpacity
                onPress={() => {
                  ref.current.seek(parseInt(progress.currentTime) + 10);
                }}>
                <Image
                  source={require('./forward.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: 'white',
                    marginLeft: 50,
                  }}
                />
              </TouchableOpacity> */}
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>
                {format(progress.currentTime)}
              </Text>
              <Slider
                value={progress?.currentTime}
                minimumValue={0}
                maximumValue={progress?.seekableDuration}
                style={{width: '80%', height: 40}}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#fff"
                onValueChange={x => {
                  ref.current.seek(x);
                }}
              />
              <Text style={{color: 'white'}}>
                {format(progress.seekableDuration)}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                position: 'absolute',
                top: 10,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              {/* <TouchableOpacity
                onPress={() => {
                  // if (fullScreen) {
                  //   Orientation.lockToPortrait();
                  // } else {
                  //   Orientation.lockToLandscape();
                  // }
                  setFullScreen(!fullScreen);
                }}>
                <Icons.MaterialCommunityIcons
                  name={fullScreen ? 'fullscreen-exit' : 'fullscreen'}
                  size={30}
                  color={'white'}
                />
              </TouchableOpacity> */}

              <TouchableOpacity
                onPress={() => {
                  setMute(!Mute);
                }}>
                <Image
                  source={
                    Mute
                      ? require('./mute.png')
                      : require('./medium-volume.png')
                  }
                  style={{width: 24, height: 24, tintColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </Pressable>
    </View>
  );
};
export default memo(VideoPlayer);

//http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
