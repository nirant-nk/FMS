import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';

const CustomeImage = props => {
  const {source, defaultSource, ...otherProps} = props;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    setImageError(false);
  }, [source]);

  return (
    <Image
      source={imageError ? defaultSource : source}
      onError={handleImageError}
      {...otherProps}
    />
  );
};

export default CustomeImage;
