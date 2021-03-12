const CustomError = require("../extensions/custom-error");



module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;
  const l = Math.LN2;
  let check = Number(sampleActivity);
  let checkOn = isNaN(check);

  if (checkOn === true) {
    return false;
  }
  if (typeof sampleActivity === 'number' || typeof sampleActivity === 'boolean' || typeof sampleActivity === 'undefined' || typeof sampleActivity === 'object') {
    return false;
  }
  if (sampleActivity.trim().length < 1) {
    return false;
  }


  if (parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY) {
    return false;
  } 
  if (sampleActivity == undefined) {
    return false;
  }
  let result = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / l;
  
  return Math.ceil(result);
  
};
