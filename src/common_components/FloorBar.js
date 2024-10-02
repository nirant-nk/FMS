import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {styles_1} from './Entrie_1';
import {CustomeText_14pt} from './TextComponents/CustomeText';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';

const FloorBar = ({
  SelectedIndex,
  List,
  onSelect,
  PreName,
  style,
  MultiFormsError,
}) => {
  return (
    <View style={{backgroundColor: '#FFF9E9'}}>
      <ScrollView
        horizontal
        contentContainerStyle={[style, {backgroundColor: '#FFF9E9'}]}>
        <View style={[styles_1.RowContainer, styles.Header]}>
          {List.map((item, index) => {
            return (
              <View style={styles.OptionContainer}>
                <CustomeText_14pt
                  onPress={() => onSelect(index, item?.id)}
                  TextData={`${PreName || 'Floor'} ${index + 1}`}
                  style={[
                    index == SelectedIndex ? styles.selectedStyle : null,
                    MultiFormsError && MultiFormsError[index]?.Error
                      ? styles.Error
                      : null,
                  ]}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default FloorBar;

const styles = StyleSheet.create({
  Header: {
    borderRadius: null,
    paddingHorizontal: responsiveWidthPixel(10),
    backgroundColor: '#FFF9E9',
    justifyContent: null,
    // columnGap: responsiveWidthPixel(50),
  },
  selectedStyle: {
    borderBottomWidth: 2,
    paddingBottom: responsiveHeightPixel(3),
    height: responsiveHeightPixel(48),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    paddingHorizontal: responsiveWidthPixel(11),
    backgroundColor: '#FFE9AE',
    borderColor: '#D99F00',
  },
  OptionContainer: {
    minWidth: responsiveWidthPixel(73),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Error: {
    color: 'red',
  },
});
