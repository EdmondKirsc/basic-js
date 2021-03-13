const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = calculateTurns(disksNumber);
  let time = Math.floor(turns * 3600 / turnsSpeed);
  let result = {
    'turns': turns,
    "seconds": time
  }
  return result;
  
};


function calculateTurns(disk) {
  if (disk === 1) {
    return 1;
  } else {
    return (calculateTurns(disk - 1) * 2 + 1);
  }
}