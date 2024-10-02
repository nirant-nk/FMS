import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradientView from '../wrappers/LinearGradientView';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {CustomeText_16pt} from './TextComponents/CustomeText';

const BottomFlootingBar = ({List, MainContainer}) => {
  return (
    <View style={[styles.MainContainer, MainContainer]}>
      {List?.map(item => {
        return (
          <LinearGradientView style={{flex: 1}}>
            <TouchableOpacity
              style={[styles.SubContainer]}
              onPress={item.onPress}>
              <CustomeText_16pt
                TextData={item.Title}
                style={styles.TextHeading}
              />
            </TouchableOpacity>
          </LinearGradientView>
        );
      })}
    </View>
  );
};

export default BottomFlootingBar;

const styles = StyleSheet.create({
  MainContainer: {
    height: responsiveHeightPixel(45),
    marginHorizontal: responsiveWidthPixel(6),
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'absolute',
    width: '98%',
    // zIndex: 5,
    columnGap: 1,
    bottom: responsiveHeightPixel(5),
    alignSelf: 'center',
  },
  SubContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextHeading: {
    fontWeight: 'bold',
  },
  TextDiscription: {
    textAlign: 'center',
  },
});
