export function FormatDate(dateString) {
  if (dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    // console.warn("data",`${day}-${month}-${year}`);

    return `${day}-${month}-${year}`;
  } else {
    return null;
  }
}
export function convertDateFormat(inputDate) {
  // Parse the input date string
  if (inputDate) {
    const originalDate = new Date(inputDate);

    // Get the components of the date
    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = originalDate.getDate().toString().padStart(2, '0');

    // Create the new formatted date string
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  } else {
    return null;
  }
}
export function formatDateWithMonth(inputDate) {
  if (inputDate) {
    const originalDate = new Date(inputDate);

    // Format the date as "DD MMM YYYY"
    const options = {day: '2-digit', month: 'short', year: 'numeric'};
    const formattedDate = originalDate.toLocaleDateString('en-US', options);

    return formattedDate;
  } else {
    return null;
  }
}
export function formatDateWithMonthAndTime(inputDate) {
  if (inputDate) {
    const originalDate = new Date(inputDate);

    // Format the time as "hh:mm A"
    const timeOptions = {hour: '2-digit', minute: '2-digit', hour12: true};
    const formattedTime = originalDate.toLocaleTimeString('en-US', timeOptions);

    // Format the date as "DD MMM"
    const dateOptions = {day: '2-digit', month: 'short'};
    const formattedDate = originalDate.toLocaleDateString('en-US', dateOptions);

    // Concatenate the formatted time and date
    const result = `${formattedTime}, ${formattedDate}`;

    return result;
  } else {
    return null;
  }
}

export function formatTime(inputDate) {
  if (inputDate) {
    const originalDate = new Date(inputDate);

    // Format the time as "HH:mm A"
    const optionsTime = {hour: '2-digit', minute: '2-digit', hour12: true};
    const formattedTime = originalDate.toLocaleTimeString('en-US', optionsTime);

    return formattedTime;
  } else {
    return null;
  }
}

export function DotedFormatDate(dateString) {
  if (dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}.${month}.${year}`;
  } else {
    return null;
  }
}

export function addTimeToDateString(inputDate) {
  const date = new Date(inputDate + 'T09:01:33.000000Z');
  return date;
}

export function extractTime(date) {
  if (date) {
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    return formattedTime;
  } else {
    return '';
  }
}

export function combineDateAndTime(timeString) {
  if (!timeString) {
    return '';
  }
  const dateString = FormatDateYYYYMMDD(new Date());
  const dateTimeString = `${dateString}T${timeString}.000000Z`;
  const dateObject = new Date(dateTimeString);
  return dateObject;
}

export function FormatTimeHHMMAMPM(timeobj) {
  if (!timeobj) {
    return '';
  }
  const formattedTime = timeobj.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return formattedTime;
}
export function FormatDateYYYYMMDD(dateString) {
  if (dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${year}-${month}-${day}`;
  } else {
    return '';
  }
}
