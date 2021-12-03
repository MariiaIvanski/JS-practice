var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else {
    let arrayOfNums = Array.from(String(x), Number);
    console.log(arrayOfNums);
    let reverseArray = arrayOfNums;
    reverseArray = JSON.stringify(reverseArray.reverse());
    arrayOfNums = JSON.stringify(arrayOfNums);
    console.log(reverseArray);
    return arrayOfNums === reverseArray ? true : false;
  }
};
console.log(isPalindrome(10));
console.log(isPalindrome(151));
