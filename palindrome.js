var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else {
    let arrayOfNums = Array.from(String(x), Number);
    for (let i = 0; i < arrayOfNums.length / 2; i++) {
      if (arrayOfNums[i] !== arrayOfNums[arrayOfNums.length - (i + 1)]) {
        return false;
      }
    }
    return true;
  }
};

// let arrayOfNums = Array.from(String(x), Number);
//let reverseArray = arrayOfNums;
// arrayOfNums = JSON.stringify(arrayOfNums);
// reverseArray = JSON.stringify(reverseArray.reverse());
//return (arrayOfNums.localeCompare(reverseArray) === 0) ? true : false;
