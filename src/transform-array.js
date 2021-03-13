const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr);
  if (!Array.isArray(arr)) {
    throw new Error('Not implemented');
  }
  let copy = arr.slice(0, arr.length);
  let newArr = [];
  
  for (i = 0; i < copy.length; i++) {
     if ((i === 0) && (copy[i] === '--discard-prev' || copy[i] === '--double-prev')) {
       continue;
     }
     if ((i === copy.length - 1) && (copy[i] === '--discard-next' || copy[i] === '--double-next')) {
      return newArr;
     }
      if (copy[i] === '--discard-next' && copy[i + 2] === '--discard-prev') {
      i = i + 2;
    } else if (copy[i] === '--discard-next') {
      i = i + 1;
    }  else if (copy[i] === '--discard-prev') {
      newArr.pop();
    } else if (copy[i] === '--double-next') {
      newArr.push(copy[i+1]);
    } else if (copy[i] === '--double-prev' && copy[i - 2] === '--discard-next') {
      continue;
    } else if (copy[i] === '--double-prev') {
      newArr.push(copy[i-1]);
    } else {
      newArr.push(copy[i]);
    }
  }
  return newArr;
};

