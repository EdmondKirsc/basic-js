const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
    

  let arr = [];                                  //создаем пустой массив
  for (let i = 0; i < members.length; i++) {
   if (typeof members[i] === 'string') {
     arr.push(members[i]);
   }
 }                                              //в пустой массив arr пушим все строковые значения из members

 for (j = 0; j < arr.length; j++) {
   arr[j] = arr[j].trim();
 }                                              //убираем пробелы из строк в массиве arr

  let firstLetters = [];
  for (let k = 0; k < arr.length; k++) {
    firstLetters.push(arr[k][0]);
  }                                             //в новый массив firstLetters добавляем первые буквы строк из массива arr
  let UpperLetters = [];
  for (let l = 0; l < firstLetters.length; l++) {
    UpperLetters.push(firstLetters[l].toUpperCase());
  }                                       //в новый массив UpperLetters Добавляем заглавные буквы из массива firstLetters

  let sortedArray = UpperLetters.sort();
  let str = sortedArray.join("");
  return str;


};

