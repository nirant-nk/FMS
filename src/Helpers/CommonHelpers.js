import moment from 'moment';
import {imgPath} from '../../assets/constants/NetworkImage';
import {useRef} from 'react';

export function generateOTP() {
  const otp = Math.floor(10000 + Math.random() * 90000); // Generates a random 5-digit number
  return otp.toString();
}
export function generateOTP4Digit() {
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp.toString();
}

export function formatDate(inputDateStr) {
  if (inputDateStr) {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const inputDate = new Date(inputDateStr);
    const formattedDate = inputDate.toLocaleDateString(undefined, options);
    return formattedDate;
  } else {
    return null;
  }
}

export function ExtractDateMonthYear(dateString) {
  if (dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return {Day: day, Month: month, Year: year};
  } else {
    return {Day: 'Day', Month: 'Month', Year: 'Year'};
  }
}

export function updateSelectionById(list, id, isSelected) {
  return list.map(item => {
    if (item.id === id) {
      return {...item, isSelected};
    }
    return item;
  });
}

export function updateSelectionByUserId(list, id, isSelected) {
  return list.map(item => {
    if (item?.user_id === id) {
      return {...item, isSelected};
    }
    return item;
  });
}

export function getSelectedItems(list) {
  return list.filter(item => item.isSelected);
}

export function removeFromList(list, id) {
  return list.filter(item => item.id != id);
}

export function updateInitailSelectedIds(itemList, selectedIds) {
  return itemList.map(item => {
    item.isSelected = selectedIds.includes(item.id);
    return item;
  });
}

export function formatTimeAgo(DateTime) {
  if (!DateTime) {
    return '';
  }
  const input = moment.utc(DateTime).local().startOf('minute').fromNow();
  // Regular expression to extract numerical value and unit
  const regex = /^(\d+)\s*(minute|hour|day|week|month|year)s?\s+ago$/;

  // Match the input against the regular expression
  const match = input.match(regex);

  if (match) {
    const value = match[1];
    const unit = match[2];

    // Map units to abbreviations
    const unitAbbreviations = {
      minute: 'm',
      hour: 'h',
      day: 'd',
      week: 'w',
      month: 'm',
      year: 'y',
    };

    // Return the formatted string
    return `${value} ${unitAbbreviations[unit]} ago`;
  } else {
    // Return the original string if it doesn't match the expected format
    return input;
  }
}

export function calculatePercentageValue(percentage, fixedValue) {
  var calculatedValue = (percentage / 100) * fixedValue;
  return calculatedValue;
}

export function calculatePercentage(totalValue, anotherValue) {
  if (totalValue <= 0) {
    console.error('Total value must be greater than zero');
    return 0;
  }

  const percentage = (anotherValue / totalValue) * 100;

  console.log(`${anotherValue} is ${percentage}% of ${totalValue}`);

  return percentage;
}

export const generateRoomID = (uid1, uid2) => {
  const sortedIds = [uid1, uid2].sort();
  return `${sortedIds[0]}${sortedIds[1]}`;
};

export function extractSelectedId(data) {
  // console.log("===> common", data);
  const selectedIds = [];

  // Iterate through the categories
  // Iterate through the subcategories of each category
  data.forEach((item, index) => {
    // Check if the subcategory is selected (isSelected === true)
    if (item.isSelected) {
      // Push the ID of the selected subcategory into the result array
      // selectedIds.push(item.id);
      selectedIds.push(item.id);
      // console.warn("selected id in tag", selectedIds);
    }
  });

  return selectedIds;
}

export function DateString(DateTime) {
  if (!DateTime) {
    return '';
  }
  const input = moment.utc(DateTime).local().startOf('seconds').fromNow();
  return input;
}

export function returnOneErrorString(ErrorList) {
  let MyError = '';
  ErrorList.map((item, index) => {
    if (ErrorList.length - 1 == index) {
      MyError = MyError + item;
    } else {
      MyError = MyError + item + '\n';
    }
  });
  return MyError;
}

export function getCountOfSuccess(inputArray) {
  let result = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].success === true) {
      result = result + 1;
    }
  }

  return result;
}
export function getTotalArea(inputArray) {
  let result = 0;

  for (let i = 0; i < inputArray.length; i++) {
    result = result + inputArray[i].totalArea;
  }

  return result;
}

export function getSelectedSubcategoryIds(updatedCategories) {
  const selectedSubcategoryIds = [];

  // Iterate through the categories
  updatedCategories.forEach(category => {
    // Iterate through the subcategories of each category
    category.tag.forEach(subcategory => {
      // Check if the subcategory is selected (isSelected === true)
      if (subcategory.isSelected) {
        // Push the ID of the selected subcategory into the result array
        selectedSubcategoryIds.push(subcategory.id);
      }
    });
  });
  return selectedSubcategoryIds;
}

export function getTagsAsString(inputArray) {
  let result = '';
  let Length = inputArray.length;
  inputArray.map((item, index) => {
    if (Length - 1 == index) {
      result = result + item?.tags?.name;
    } else {
      result = result + item?.tags?.name + ', ';
    }
  });

  return result;
}
export function getTagsAsString2(inputArray) {
  let result = '';
  let Length = inputArray.length;
  inputArray.map((item, index) => {
    if (Length - 1 == index) {
      result = result + item?.tag?.name;
    } else {
      result = result + item?.tag?.name + ', ';
    }
  });

  return result;
}
export function getTagsAsString3(inputArray) {
  let result = '';
  let Length = inputArray.length;
  inputArray.map((item, index) => {
    if (Length - 1 == index) {
      result = result + item?.interest?.name;
    } else {
      result = result + item?.interest?.name + ', ';
    }
  });

  return result;
}

export function addDaysToDate(originalDateStr, daysToAdd) {
  // Parse the input date string
  const originalDate = new Date(originalDateStr);

  // Calculate the new date by adding days
  const newDate = new Date(originalDate);
  newDate.setDate(originalDate.getDate() + parseInt(daysToAdd));

  // Return the new date

  return newDate;
}

export function selectSubcategoriesByIds(data, subcategoryIds) {
  // Create a deep copy of the original data to avoid modifying it directly
  const updatedData = JSON.parse(JSON.stringify(data));

  // Iterate through the categories and their subcategories
  updatedData.forEach(category => {
    category.tag.forEach(subcategory => {
      // Check if the subcategory ID is in the provided array
      if (subcategoryIds.includes(subcategory.id)) {
        subcategory.isSelected = true;
      } else {
        subcategory.isSelected = false;
      }
    });
  });

  return updatedData;
}

export function extractInterestIds(data) {
  let interestIds = [];

  for (let entry of data) {
    interestIds.push(entry.interest_id);
  }

  return interestIds;
}

export function updatePollVote(data, postId, optionId, voteStatus) {
  const post = {...data};

  if (!post || !post.poll) {
    console.error("Post not found or doesn't have a poll");
    return post;
  }

  const poll = post.poll;
  const option = poll.poll_options.find(option => option.id === optionId);

  if (!option) {
    console.error('Poll option not found');
    return post;
  }

  // Update vote and vote count based on the provided status
  if (voteStatus) {
    poll.vote = {option_id: optionId};
    poll.votes_count++;
    option.vote_count++;
  } else {
    poll.vote = null;
    poll.votes_count--;
    option.vote_count--;
  }

  console.log('Vote updated successfully');

  return post;
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function updatePollOptionUserVote(data, optionId) {
  // Create a deep copy of the original data
  const newData = {...data};

  // Find the poll option by id in the copied data
  const pollOption = newData.poll.poll_options.find(
    option => option.id === optionId,
  );
  newData.poll.vote = false;
  if (pollOption) {
    // Check if multi_option_select is true
    if (newData.poll.multi_option_select) {
      // If true, toggle user_vote for the selected option
      if (pollOption.user_vote) {
        newData.poll.votes_count--;
        pollOption.vote_count--;
      } else {
        newData.poll.votes_count++;
        pollOption.vote_count++;
      }

      pollOption.user_vote = !pollOption.user_vote;
      newData.poll.poll_options.forEach(option => {
        if (option.user_vote) {
          newData.poll.vote = true;
        }
      });
    } else {
      // If false, toggle user_vote for the selected option and set others to false
      newData.poll.poll_options.forEach(option => {
        if (option.user_vote) {
          newData.poll.votes_count--;
          option.vote_count--;
        }
        option.user_vote = option.id === optionId ? !option.user_vote : false;
        if (option.user_vote) {
          newData.poll.votes_count++;
          option.vote_count++;
          newData.poll.vote = true;
        }
      });
    }

    // Update votes_count and vote_count based on user_vote
  }

  // Return the updated object
  return newData;
}

export function updateSurveyOptionSelection(
  dataOld,
  questionId,
  optionId,
  ans,
) {
  // Find the survey question by id
  const data = {...dataOld};

  const surveyQuestion = data.survey.survey_questions.find(
    question => question.id === questionId,
  );

  // Find the survey question option by id
  const option = surveyQuestion.survey_questions_option.find(
    opt => opt.id === optionId,
  );

  // If multi_option_select is true, update ans directly
  if (surveyQuestion.multi_option_select) {
    option.ans = ans;
  } else {
    // If multi_option_select is false, update ans for the selected option and deselect others
    surveyQuestion.survey_questions_option.forEach(opt => {
      opt.ans = opt.id === optionId ? ans : false;
    });
  }

  // Return the updated object
  return data;
}

export function updateSurveySubmitedCount(dataOld) {
  // Find the survey question by id
  const data = {...dataOld};

  data.survey.submited_count_count =
    (data?.survey?.submited_count_count || 0) + 1;

  // Return the updated object
  return data;
}

export function getSelectedIdsByQuestionId(data, questionId) {
  const selectedIds = [];

  // Find the survey question by id
  const surveyQuestion = data.survey.survey_questions.find(
    question => question.id === questionId,
  );

  if (surveyQuestion) {
    // Check if multi_option_select is true
    if (surveyQuestion.multi_option_select) {
      // If true, add all selected option ids to the array
      surveyQuestion.survey_questions_option.forEach(option => {
        if (option.ans) {
          selectedIds.push(option.id);
        }
      });
    } else {
      // If false, add the id of the selected option to the array
      const selectedOption = surveyQuestion.survey_questions_option.find(
        option => option.ans,
      );
      if (selectedOption) {
        selectedIds.push(selectedOption.id);
      }
    }
  }

  return selectedIds;
}

export function getSelectedOptionIds(data) {
  const selectedIds = [];

  // Iterate through survey questions
  data.survey.survey_questions.forEach(question => {
    // Check if multi_option_select is true
    if (question.multi_option_select) {
      // If true, add all selected option ids to the array
      question.survey_questions_option.forEach(option => {
        if (option.ans) {
          selectedIds.push(option.id);
        }
      });
    } else {
      // If false, add the id of the selected option to the array
      const selectedOption = question.survey_questions_option.find(
        option => option.ans,
      );
      if (selectedOption) {
        selectedIds.push(selectedOption.id);
      }
    }
  });

  return selectedIds;
}

export function FormatKMB(Number = 0) {
  const FormatedNum = Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(Number);
  return FormatedNum;
}

export function extractImages(data) {
  const Images = [];
  data.forEach((item, index) => {
    Images.push(imgPath + item.file);
  });

  return Images;
}

export function extractTagId(data) {
  const selectedIds = [];
  data.forEach((item, index) => {
    selectedIds.push(item.tag_id);
  });
  return selectedIds;
}

export const generateRefsArray = length => {
  const refsArray = Array.from({length}, () => useRef());
  return refsArray;
};

export function ensureHttps(link) {
  if (link.startsWith('https://') || link.startsWith('http://')) {
    return link;
  } else {
    return 'https://' + link;
  }
}

export function endsWithQuestionMark(message) {
  // Remove trailing whitespaces before checking
  const trimmedMessage = message.trim();

  // Check if the trimmed message ends with a question mark
  return trimmedMessage.endsWith('?');
}

export function transformMessages(inputArray) {
  const firstTwoMessages = inputArray;

  const transformedMessages = firstTwoMessages.map((message, index) => {
    return {
      id: index + 1, // Incremental order for IDs
      text: firstTwoMessages[firstTwoMessages.length - 1 - index].text, // Decremental order for messages
      userId: `user${message.sendBy}`,
      isLocalUser: false,
    };
  });

  return transformedMessages;
}

export function getFileTypeAndName(uri) {
  if (!uri) {
    return {
      type: '',
      name: '',
    };
  }
  // Extract file extension
  const fileExtension = uri.split('.').pop().toLowerCase();

  // Define default values
  let fileType = 'application/octet-stream';
  let fileName = 'file';

  // Map common file extensions to MIME types
  const mimeTypeMap = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mov: 'video/quicktime',
    avi: 'video/x-msvideo',
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    // Add more mappings as needed
  };

  // Check if the file extension is mapped to a MIME type
  if (mimeTypeMap[fileExtension]) {
    fileType = mimeTypeMap[fileExtension];
  }

  // Extract filename from the uri
  const filenameParts = uri.split('/');
  fileName = filenameParts[filenameParts.length - 1];

  // Return type and filename
  return {
    type: fileType,
    name: fileName,
  };
}

export const isVideo = url => {
  // Get the file extension from the URL
  const fileExtension = url.split('.').pop().toLowerCase();
  // List of video file extensions
  const videoExtensions = ['mp4', 'avi', 'mov', 'mkv', 'wmv', 'flv', 'webm'];
  // Check if the file extension is in the list of video extensions
  return videoExtensions.includes(fileExtension);
};

export function sqmToSqft(sqMetersStr) {
  if (!sqMetersStr || sqMetersStr == '.') {
    return '';
  }
  const sqMeters = parseFloat(sqMetersStr);
  if (isNaN(sqMeters)) return 'Invalid input';
  const sqFeet = sqMeters * 10.76;
  return sqFeet.toString();
}

export function sqftToSqm(sqFeetStr) {
  if (!sqFeetStr || sqFeetStr == '.') {
    return '';
  }
  const sqFeet = parseFloat(sqFeetStr);
  if (isNaN(sqFeet)) return 'Invalid input';
  const sqMeters = sqFeet / 10.76;
  return sqMeters.toString();
}
