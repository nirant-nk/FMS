import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradientView from '../wrappers/LinearGradientView';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {
  CustomeText_10pt,
  CustomeText_12pt,
  CustomeText_16pt,
} from './TextComponents/CustomeText';
import {styles_1} from './Entrie_1';
import SizedView from './SizedBox/SizedView';

const BottomStats = ({List, MainContainer}) => {
  return (
    <View style={[styles.MainContainer, MainContainer]}>
      {List?.map(item => {
        return (
          <LinearGradientView style={styles.SubContainer}>
            {item.TwoParts ? (
              <View
                style={{
                  width: '100%',
                  paddingHorizontal: responsiveWidthPixel(10),
                }}>
                <View
                  style={[
                    styles_1.RowContainer,
                    {columnGap: responsiveWidthPixel(10)},
                  ]}>
                  <CustomeText_16pt
                    TextData={item.TwoParts.first.quantity}
                    style={[styles.Bold, {textAlign: 'center', flex: 1}]}
                  />
                  <CustomeText_10pt TextData={item.TwoParts.first.title} />
                </View>
                <SizedView
                  style={[
                    {
                      height: 0.5,
                      backgroundColor: '#2E2E2E',
                      marginVertical: responsiveHeightPixel(3),
                    },
                  ]}
                />
                <View
                  style={[
                    styles_1.RowContainer,
                    {columnGap: responsiveWidthPixel(10)},
                  ]}>
                  <CustomeText_16pt
                    TextData={item.TwoParts.second.quantity}
                    style={[styles.Bold, {textAlign: 'center', flex: 1}]}
                  />
                  <CustomeText_10pt TextData={item.TwoParts.second.title} />
                </View>
              </View>
            ) : null}

            {item.Price ? (
              <CustomeText_16pt TextData={item.Price} style={styles.Bold} />
            ) : null}
            {item.Title ? (
              <CustomeText_12pt
                TextData={item.Title}
                style={styles.TextDiscription}
              />
            ) : null}
            {item.SubTitle ? (
              <CustomeText_10pt TextData={item.SubTitle} style={styles.Bold} />
            ) : null}
          </LinearGradientView>
        );
      })}
    </View>
  );
};

export default BottomStats;

const styles = StyleSheet.create({
  MainContainer: {
    height: responsiveHeightPixel(90),
    marginHorizontal: responsiveWidthPixel(6),
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    columnGap: 1,
    position: 'absolute',
    width: '98%',
    // zIndex: 999,
    bottom: responsiveHeightPixel(5),
    alignSelf: 'center',
  },
  SubContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: responsiveHeightPixel(5),
  },
  Bold: {
    fontWeight: 'bold',
  },
  TextDiscription: {
    textAlign: 'center',
  },
});
