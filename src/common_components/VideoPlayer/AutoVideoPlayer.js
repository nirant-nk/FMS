import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState, memo} from 'react';
import Video from 'react-native-video';
import {Pressable} from 'react-native';
import {responsiveWidthPixel} from '../../Helpers/ResponsivePixel';
import useModal_1 from '../../hooks/useModal_1';
import VideoPlayerModal from '../modals/VideoPlayerModal';
const AutoVideoPlayer = ({VideoPath, ImagePath}) => {
  // console.warn({VideoPath});
  const [clicked, setClicked] = useState(true);
  const [puased, setPaused] = useState(false);
  const [progress, setProgress] = useState(`${0}:${1}`);
  const {onOpen, onClose, Visible} = useModal_1();
  const SeekFromModal = useRef(0);
  const [Mute, setMute] = useState(true);
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
      {!Visible ? (
        <Pressable
          style={{
            width: '100%',
            height: '100%',
          }}
          onPress={() => {
            setClicked(true);
          }}>
          {VideoPath ? (
            <Video
              onReadyForDisplay={() => {
                ref.current.seek(SeekFromModal.current);
              }}
              onBuffer={e => {
                console.warn(e);
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
              }}
              resizeMode="contain"
              progressUpdateInterval={1000}
              onEnd={() => {
                ref.current.seek(0);
                SeekFromModal.current = 0;
                setPaused(true);
                setTimeout(() => {
                  setPaused(false);
                }, 1000);
              }}
            />
          ) : null}
          {clicked && (
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                // backgroundColor: 'rgba(0,0,0,.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={onOpen}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  top: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,.7)',
                    padding: responsiveWidthPixel(3),
                    borderRadius: 5,
                  }}>
                  {format(progress.seekableDuration - progress.currentTime)}
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  bottom: 0,
                  padding: 20,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(0,0,0,.7)',
                    padding: responsiveWidthPixel(3),
                    borderRadius: 5,
                  }}
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
      ) : (
        <Pressable
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Loading</Text>
        </Pressable>
      )}
      {Visible ? (
        <VideoPlayerModal
          VideoURL={VideoPath}
          SeekDuration={progress.currentTime}
          visible={Visible}
          onRequestClose={GoToTime => {
            onClose();
            SeekFromModal.current = GoToTime?.currentTime || 0;
          }}
        />
      ) : null}
    </View>
  );
};
export default memo(AutoVideoPlayer);

//http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
