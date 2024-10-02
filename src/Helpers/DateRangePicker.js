import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  useResponsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icons from '../../assets/Icons/Icons';
import CalendarPicker from 'react-native-calendar-picker';
import {responsiveHeightPixel} from './ResponsivePixel';

export default ({handleInputChange, FormObjName, minimumDate}) => {
  // console.warn({minimumDate})
  const maxDate = new Date(); // Today
  // const minDate = new Date("2023-09-08T18:30:00.000Z");
  const [calendarVisible, setCalendarVisible] = useState(false);
  function onDateChange(date, type) {
    if (type === 'START_DATE') {
      const dateString = date.toString();
      if (handleInputChange) {
        handleInputChange(FormObjName, dateString);
      }
      setCalendarVisible(false);
    }
  }
  return (
    <>
      <TouchableOpacity onPress={() => setCalendarVisible(true)}>
        <Icons.EvilIcons
          name={'calendar'}
          size={responsiveHeightPixel(50)}
          color="#000000"
        />
      </TouchableOpacity>

      <Modal visible={calendarVisible} transparent animationType="slide">
        <TouchableWithoutFeedback
        // onPress={() => {
        //   setCalendarVisible(false);
        // }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <CalendarPicker
                startFromMonday={true}
                // allowRangeSelection={true}
                minDate={minimumDate}
                maxDate={maxDate}
                todayBackgroundColor="#f2e6ff"
                todayTextStyle={{color: 'black'}}
                selectedDayColor="#7300e6"
                selectedDayTextColor="#FFFFFF"
                onDateChange={onDateChange}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                setCalendarVisible(false);
              }}
              style={styles.OKButton}>
              <Text style={{color: 'black', fontSize: responsiveFontSize(2.2)}}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: responsiveWidth(5),
    // width: 300,
    width: responsiveWidth(100),
    // height: responsiveHeight(45),
  },
  optionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noBorder: {
    borderBottomWidth: 0, // Remove bottom border
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'green',
  },
  OKButton: {
    width: responsiveWidth(30),
    height: responsiveHeight(6),
    backgroundColor: 'white',
    borderRadius: 7,
    marginTop: responsiveHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
