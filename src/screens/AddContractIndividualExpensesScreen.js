import {StyleSheet} from 'react-native';
import {
  responsiveHeightPixel,
  responsiveWidthPixel,
} from '../Helpers/ResponsivePixel';
import {responsiveHeight} from 'react-native-responsive-dimensions';

export const styles_3 = StyleSheet.create({
  MainStyle: {
    paddingTop: responsiveHeightPixel(0),
  },
  subContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    backgroundColor: 'white',
  },
  BoldText: {
    fontWeight: 'bold',
  },
  Padding: {
    paddingHorizontal: responsiveWidthPixel(16),
  },
  FormContainer: {
    marginHorizontal: responsiveWidthPixel(8),
    paddingHorizontal: responsiveWidthPixel(8),
    backgroundColor: '#FFFCF2',
    borderRadius: 13,
  },
  HorizontalLine: {
    backgroundColor: '#E6E6E6',
    height: 2,
    width: '100%',
  },
  RowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: responsiveWidthPixel(16),
  },
  MinColumnGap: {
    columnGap: responsiveWidthPixel(8),
  },
  StatsStyle: {
    position: 'absolute',
    bottom: responsiveHeightPixel(5),
  },
  ImageStyle: {
    height: responsiveHeightPixel(55),
    width: responsiveHeightPixel(50),
    borderRadius: 5,
  },
});

export const WideButtonStyles = StyleSheet.create({
  ButtonStyleAbsolute: {
    backgroundColor: '#1E1E1E',
    width: '93%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: responsiveHeight(13),
  },
});
