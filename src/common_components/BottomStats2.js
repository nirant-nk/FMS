import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradientView from '../wrappers/LinearGradientView';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  CustomeText_12pt,
  CustomeText_16pt,
  CustomeText_24pt,
} from './TextComponents/CustomeText';

const BottomStats2 = ({Title, Amount, MainContainerStyle}) => {
  return (
    <View style={[styles.MainContainer, MainContainerStyle]}>
      <LinearGradientView style={styles.SubContainer1}>
        <CustomeText_16pt
          TextData={'Total Expenditure'}
          style={styles.TextHeading}
        />
        <CustomeText_12pt TextData={Title} style={styles.TextDiscription} />
      </LinearGradientView>
      <LinearGradientView style={styles.SubContainer2}>
        <CustomeText_24pt
          TextData={Amount}
          style={styles.TextHeading}
          numberOfLines={1}
          adjustsFontSizeToFit
        />
      </LinearGradientView>
    </View>
  );
};

export default BottomStats2;

const styles = StyleSheet.create({
  MainContainer: {
    height: responsiveHeightPixel(90),
    marginHorizontal: responsiveWidthPixel(6),
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    columnGap: 1,
    width: '98%',
    // zIndex: 5,
    alignSelf: 'center',
    bottom: responsiveHeightPixel(5),
  },
  SubContainer1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: responsiveHeightPixel(5),
  },
  SubContainer2: {
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
