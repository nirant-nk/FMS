import {
  StyleSheet,
  FlatList,
  Text,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React from 'react';
import DefaultWrap from '../wrappers/DefaultWrap';
import Header_1 from '../common_screens/Header_1';
import KharchaEntrie from '../common_components/KharchaEntrie';
import useGetPersonalBook from '../hooks/useGetPersonalBook';
import LoadingComponent from '../common_components/LoadingComponent';
import {DefaultStyles} from '../../assets/constants/styleContasts';

const KharchaListingScreen = ({navigation, route}) => {
  const type = route?.params?.type;

  const {List, isLoading, isRefreshing, onRefresh} = useGetPersonalBook({
    type: type,
  });

  if (isLoading) {
    return (
      <>
        <Header_1 BigTitle={type} />
        <DefaultWrap style={DefaultStyles.MainStyleLoading}>
          <LoadingComponent Loader={isLoading} />
        </DefaultWrap>
      </>
    );
  }

  if (!isLoading && !isRefreshing && !List.length) {
    return (
      <DefaultWrap>
        <Header_1 BigTitle={type} />
        <ScrollView
          contentContainerStyle={{flex: 1}}
          refreshControl={
            <RefreshControl
              enabled={true}
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          }>
          <DefaultWrap style={DefaultStyles.MainStyleLoading}>
            <Text style={DefaultStyles.NoDataFoundStyle}>No Data Added!</Text>
          </DefaultWrap>
        </ScrollView>
      </DefaultWrap>
    );
  }
  console.log({List});
  return (
    <>
      <Header_1 BigTitle={type} />
      <DefaultWrap>
        <FlatList
          refreshControl={
            <RefreshControl
              enabled={true}
              refreshing={isRefreshing}
              onRefresh={onRefresh}
            />
          }
          data={List}
          renderItem={({item}) => <KharchaEntrie item={item} />}
        />
      </DefaultWrap>
    </>
  );
};

export default KharchaListingScreen;

const styles = StyleSheet.create({});
