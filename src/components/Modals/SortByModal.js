import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../../Helpers/ResponsivePixel';

import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import {
  CustomeText_12pt,
  CustomeText_14pt,
  CustomeText_16pt,
  CustomeText_18pt,
} from '../../common_components/TextComponents/CustomeText';
import SizedView from '../../common_components/SizedBox/SizedView';
import {styles_1} from '../../common_components/Entrie_1';
import useGetSortBy from '../../hooks/useGetSortBy';
import LoadingComponent from '../../common_components/LoadingComponent';

const SortByModal = ({
  visible,
  onRequestClose,
  SelectedSort,
  SetSelectedSort,
  onRefresh,
  type,
}) => {
  const [SelectedFilter, SetSelectedFilter] = useState(SelectedSort);
  const ViewRef = useRef();
  const {List, isLoading} = useGetSortBy(type);
  useEffect(() => {
    onRefresh();
  }, [SelectedSort]);
  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View ref={ViewRef} style={styles.modalContainer}>
            <Pressable style={styles.MainContainer}>
              <CustomeText_14pt
                TextData={'Sort by'}
                style={{color: '#858585'}}
              />
              <SizedView height={responsiveHeightPixel(13)} />

              <LoadingComponent
                Loader={isLoading}
                style={{width: null, height: null}}
              />

              {List.map((item, index) => {
                const onPress = () => {
                  SetSelectedFilter(item);
                };
                return (
                  <>
                    {item == SelectedFilter ? (
                      <CustomeText_18pt
                        TextData={item}
                        style={{fontWeight: 'bold'}}
                        onPress={onPress}
                      />
                    ) : (
                      <CustomeText_16pt
                        TextData={item}
                        style={{color: 'gray'}}
                        onPress={onPress}
                      />
                    )}
                  </>
                );
              })}
              <SizedView height={responsiveHeightPixel(17)} />
              <SizedView style={styles_1.HorizontalLine} />
              <SizedView height={responsiveHeightPixel(12)} />

              <View style={[styles.RowContainer]}>
                <CustomeText_18pt
                  TextData={'Cancel'}
                  style={{fontWeight: 'bold'}}
                  onPress={() => {
                    SetSelectedSort('');
                    setTimeout(() => {
                      onRequestClose();
                    }, 200);
                  }}
                />
                <TouchableOpacity
                  disabled={!SelectedFilter}
                  onPress={() => {
                    SetSelectedSort(SelectedFilter);
                    setTimeout(() => {
                      onRequestClose();
                    }, 200);
                  }}>
                  <CustomeText_18pt
                    TextData={'Sort'}
                    style={{
                      fontWeight: 'bold',
                      color: SelectedFilter ? '#DFA400' : 'gray',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
        {ViewRef && visible ? (
          <BlurView
            style={[StyleSheet.absoluteFill, {zIndex: -1}]}
            viewRef={ViewRef}
            blurType="light"
            blurAmount={5}
            blurRadius={5}
          />
        ) : null}
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainContainer: {
    width: responsiveWidthPixel(264),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 20,
    paddingHorizontal: responsiveWidthPixel(15),
    paddingVertical: responsiveHeightPixel(23),
    // alignItems: 'center',
  },
  ButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    columnGap: responsiveWidthPixel(8),
  },
  RowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    columnGap: responsiveWidthPixel(34),
  },
});

export default SortByModal;
