import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {RefreshControl} from 'react-native';

const KeyboardAvoidingWrapper2 = ({
  children,
  loader,
  style,
  loaderFunction,
}) => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      // style={{flex: 1}}
      contentContainerStyle={style}
      refreshControl={
        <RefreshControl
          enabled={!!loaderFunction}
          refreshing={loader}
          onRefresh={loaderFunction}
        />
      }
      keyboardShouldPersistTaps={'handled'}
      enableAutomaticScroll={true}
      extraScrollHeight={-responsiveHeight(30)}
      enableOnAndroid={true}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidingWrapper2;

// ?? kame sure to set  android:windowSoftInputMode="adjustPan" in android Manifest
