import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'


export function responsiveWidthPixel(inputValue) {
    let percentage = (inputValue / 375  ) * 100;
    return responsiveWidth(percentage);
    
  }

  export function responsiveHeightPixel(inputValue) {
    let percentage = (inputValue / 812) * 100;
    return responsiveHeight(percentage);
  }
