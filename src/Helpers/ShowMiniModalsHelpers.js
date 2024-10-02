import {showMessage} from 'react-native-flash-message';

export async function showMiniMessage({message, type, style, position}) {
  try {
    showMessage({
      position: position || 'center',
      message: message,
      type: type,
      titleStyle: style || {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    });
  } catch (error) {
    return error;
  }
}
