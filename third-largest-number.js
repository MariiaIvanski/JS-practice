// Task: Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

var thirdMax = function (nums) {
  if (nums.length < 3) {
    return Math.max(...nums);
  } else {
    let uniqueNums = [...new Set(nums)];
    uniqueNums = uniqueNums.sort((a, b) => b - a);
    if (uniqueNums.length >= 3) {
      return uniqueNums[2];
    } else {
      return Math.max(...uniqueNums);
    }
  }
};
