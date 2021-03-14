const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  result = strWithAddition(str, options.addition, options.additionRepeatTimes, options.additionSeparator);
  result = repeatStrAndSeparator(result, options.repeatTimes, options.separator);
  return result;
};
  

function strWithAddition(str, addition = "", times = 1, separator = '|') {
  str = String(str);
  addition = String(addition);
  let finalAddition = addition;
  if (times === 1) {
    return str + addition;
  } else {
    for (let i = 1; i < times; i++) {
      finalAddition = finalAddition + separator + addition;
    }
  }
  return str + finalAddition;
}


function repeatStrAndSeparator(str, times = 1, separator = '+') {
  str = String(str);
  let finalStr = str;
  if (times === 1) {
    return str;
  } else {
    for (let i = 1; i < times; i++) {
      
      finalStr = finalStr + separator + str;
    }
  }
  return finalStr;
}                                                  //создали функцию, которая повторяет слова с разделителем





// str is a string to repeat;
// options is an object of options, that contains properties:
// repeatTimes sets the number of repetitions of the str;
// separator is a string separating repetitions of the str;
// addition is an additional string that will be added to each repetition of the str;
// additionRepeatTimes sets the number of repetitions of the addition;
// additionSeparator is a string separating repetitions of the addition.