import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

import SearchScreen from '../../screens/SearchScreen';
import {useNavigation} from '@react-navigation/native';

const SearchModal = ({
  visible,
  onRequestClose,
  SearchQuery,
  SetSearchQuery,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <Modal
        visible={visible}
        // transparent
        animationType="fade"
        onRequestClose={onRequestClose}>
        <View style={{flex: 1}}>
          <SearchScreen
            navigation={navigation}
            SearchQuery={SearchQuery}
            SetSearchQuery={SetSearchQuery}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchModal;
