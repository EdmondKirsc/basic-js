const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, result = 0, currentDepth = 0) {  //вводим 2 дополнительных параметра (result - для хранения максимальной глубины, currentDepth - для хранения глубины текущего индекса массива)
    if (Array.isArray(arr)) {                         //проверяем является ли первый параметр в calculateDepth массивом
      for (let i = 0; i < arr.length; i++) {          //проверяем каждый элемент массива
        currentDepth = this.calculateDepth(arr[i]);   //присваиваем значению currentDepth результат вызова calculateDepth для отдельного идекса
        if (currentDepth > result) {      //если currentDepth > текущей максимальной глубины массива, то обновляем result и обнуляем currentDepth
          result = currentDepth;
          currentDepth = 0
        }
      }
      return result + 1;                  //возвращаем result + 1, так как result начинает отсчет с подмассива arr[i]
    } else {
      return 0;
    }
  }
};
