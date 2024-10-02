export function ValidatePassword(params) {
  if (params) {
    return false;
  } else {
    return 'Please Enter Password!';
  }
}

export function ValidatePhoneNumber(params) {
  if (params) {
    var regex = /^\d{10}$/;
    if (regex.test(params)) {
      return false;
    } else {
      return 'Please Enter Valid Phone Number!';
    }
  } else {
    return 'Please Enter Phone Number!';
  }
}

export function ValidateName(params, NoInputError, ValidError) {
  if (params) {
    var regex = /^[\u0900-\u0965a-zA-Z\s]+$/;
    if (regex.test(params)) {
      return false;
    } else {
      return ValidError || 'Please Enter Valid Input!';
    }
  } else {
    return NoInputError || 'Please Enter Input!';
  }
}

export function ValidateAddress(params) {
  if (params) {
    // Updated regular expression to allow characters, numbers, and common address-related characters
    var regex = /^[a-zA-Z0-9\s\-\.,#]+$/;
    if (regex.test(params)) {
      return false;
    } else {
      return 'Please Enter Valid Input!';
    }
  } else {
    return 'Please Enter Input!';
  }
}

// export function ValidateLength(params,CurrentLanguage) {

//   if (params) {
//     if (params.length > 0) {
//       return false;
//     } else {
//       return ValidationMessagesLocalization?.ValidInput[CurrentLanguage];
//     }
//   } else {
//     return ValidationMessagesLocalization?.EnterInput[CurrentLanguage];
//   }
// }

export function ValidateNumber(params, Error2, Error1) {
  // console.warn({params,CurrentLanguage})
  if (params) {
    var regex = /^\d+$/;
    if (regex.test(params)) {
      return false;
    } else {
      return Error1 || 'Please Enter Valid Number!';
    }
  } else {
    return Error2 || 'Please Enter Valid Input!';
  }
}

export function ValidateFloatNumber(params, Error2, Error1) {
  if (params) {
    var regex = /^\d+(\.\d+)?$/; // Regex for floating point number
    if (regex.test(params)) {
      return false;
    } else {
      return Error1 || 'Please Enter a Valid Number!';
    }
  } else {
    return Error2 || 'Please Enter Valid Input!';
  }
}

export function ValidateAmount(params, Error2, Error1) {
  if (params === '') {
    return Error2 || 'Please Enter Valid Input!';
  } else if (isNaN(params) || params <= 0) {
    return Error1 || 'Amount should be greater than zero and a valid amount!';
  } else {
    return false;
  }
}

export function ValidateNumberGTO(params, Error2, Error1) {
  // console.warn({params,CurrentLanguage})
  if (params) {
    var regex = /^\d+$/;
    if (regex.test(params)) {
      if (params > 0) {
        return false;
      } else {
        return Error1 || 'Please Enter Valid Number!';
      }
    } else {
      return Error1 || 'Please Enter Valid Number!';
    }
  } else {
    return Error2 || 'Please Enter Valid Input!';
  }
}

export function ValidateEmail(params) {
  if (params) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(params)) {
      return false;
    } else {
      return 'Please Enter Valid Email!';
    }
  } else {
    return 'Please Enter Email!';
  }
}

export function ValidateAnyInput(params, ErrorMsg) {
  if (params) {
    return false;
  } else {
    return ErrorMsg || 'Please Enter Input!';
  }
}

export function ValidateSelectedOptions(params, Error) {
  if (params) {
    return false;
  } else {
    return Error || 'Please Select Date!';
  }
}

export function ValidateSelectedDatesOptions(date1, date2) {
  if (date1 && date2) {
    return false;
  } else {
    return 'Please Select Date Range!';
  }
}

// export function ValidateSelectedImages(params,CurrentLanguage) {

//   if (params) {
//     if(params.length){
//       return false;
//     }else {
//       return ValidationMessagesLocalization?.SelectedImages[CurrentLanguage];
//     }
//   } else {
//     return ValidationMessagesLocalization?.SelectedImages[CurrentLanguage];
//   }
// }

// export function validateDOB(dateOfBirth,CurrentLanguage) {

//   if (dateOfBirth) {
//     // Calculate the current date
//     var currentDate = new Date();

//     // Calculate the difference in milliseconds between the current date and the DOB
//     var timeDiff = currentDate.getTime() - dateOfBirth.getTime();

//     // Calculate the age in years
//     var age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));

//     // Check if the age is at least 10
//     if (age >= 10) {
//       return false;
//     } else {
//       return ValidationMessagesLocalization?.validateDate[CurrentLanguage];
//     }
//   } else {
//     return ValidationMessagesLocalization?.EnterDate[CurrentLanguage];
//   }
// }

// export function validateFutureDate(date,CurrentLanguage) {

//   if (date) {
//     // Get the current date
//     var currentDate = new Date();

//     // Compare the provided date with the current date
//     if (date > currentDate + 1) {
//       return false;
//     } else {
//       return ValidationMessagesLocalization?.validateDate[CurrentLanguage];
//     }
//   } else {
//     return ValidationMessagesLocalization?.EnterDate[CurrentLanguage];
//   }
// }

// export function validatePastDate(date,CurrentLanguage) {

//   if (date) {
//     // Get the current date
//     var currentDate = new Date();

//     // Compare the provided date with the current date
//     if (date < currentDate) {
//       return false;
//     } else {
//       return ValidationMessagesLocalization?.validateDate[CurrentLanguage];
//     }
//   } else {
//     return ValidationMessagesLocalization?.EnterDate[CurrentLanguage];
//   }
// }
