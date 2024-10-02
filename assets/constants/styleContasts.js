import {StyleSheet} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const titleStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

export const DefaultStyles = StyleSheet.create({
  MainStyleLoading: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  NoDataFoundStyle: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
