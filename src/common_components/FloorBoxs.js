import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles_1} from './Entrie_1';
import {CustomeText_12pt, CustomeText_8pt} from './TextComponents/CustomeText';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import SizedView from './SizedBox/SizedView';
import DocumentPicker from 'react-native-document-picker';

const FloorBoxs = ({
  List,
  Btype,
  SelectedIndex,
  FlatCount,
  handleAddOrRemoveFlats,
  handleInputChangeMultiFormsFlat,
}) => {
  useEffect(() => {
    if (FlatCount > 0) {
      handleAddOrRemoveFlats(SelectedIndex, parseInt(FlatCount || 0));
    }
  }, [FlatCount]);

  const onDocumentSelect = async index => {
    try {
      const doc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });
      // const doc = await DocumentPicker.pick({
      //   type: [DocumentPicker.types.pdf],
      //   allowMultiSelection: true
      // });
      // const doc = await DocumentPicker.pickMultiple({
      //   type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      // });
      handleInputChangeMultiFormsFlat(SelectedIndex, index, doc);
      console.log(doc);
      // handleInputChange("FormObjName", doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err))
        console.log('User cancelled the upload', err);
      else console.log(err);
    }
  };

  return (
    <ScrollView horizontal>
      <View style={[styles_1.RowContainer, styles.Header]}>
        {List.map((item, index) => {
          return (
            <View>
              <TouchableOpacity
                style={[
                  styles.OptionContainer,
                  item?.Error ? styles.Error : null,
                ]}
                onPress={() => onDocumentSelect(index)}>
                <Icons.Feather
                  name={'plus'}
                  color={'black'}
                  size={responsiveWidth(5)}
                />
                <CustomeText_12pt
                  TextData={`${
                    Btype == 'Apartment'
                      ? `Flat ${(SelectedIndex + 1) * 100 + (index + 1)}`
                      : `Duplex H${index + 1}`
                  }`}
                />
              </TouchableOpacity>
              <SizedView height={responsiveHeightPixel(3)} />
              {item?.uri ? (
                <CustomeText_8pt
                  TextData={
                    Btype == 'Apartment'
                      ? `See plan for\n ${
                          (SelectedIndex + 1) * 100 + (index + 1)
                        }`
                      : `See plan for\n Duplex H${index + 1}`
                  }
                  style={{textAlign: 'center'}}
                />
              ) : null}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default FloorBoxs;

const styles = StyleSheet.create({
  Header: {
    borderRadius: null,
    paddingHorizontal: responsiveWidthPixel(16),
    justifyContent: null,
    columnGap: responsiveWidthPixel(16),
    alignItems: null,
  },

  OptionContainer: {
    height: responsiveHeightPixel(69),
    width: responsiveWidthPixel(64),
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: responsiveHeightPixel(6),
    borderRadius: 5,
    backgroundColor: '#FFF9E9',
  },
  Error: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
