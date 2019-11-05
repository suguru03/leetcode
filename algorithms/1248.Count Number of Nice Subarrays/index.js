'use strict';

module.exports = { numberOfSubarrays };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numberOfSubarrays(nums, k) {
  let result = 0;
  let leftOdd = -1;
  let leftEven = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      leftOdd = leftOdd >= 0 ? leftOdd : i;
      if (--k < 0) {
        leftEven = leftOdd;
        while (++leftOdd < i && nums[leftOdd] % 2 === 0) {}
        while (++leftEven < leftOdd && nums[leftEven] % 2 === 1) {}
      }
    }
    if (k > 0) {
      continue;
    }
    result += leftOdd - leftEven + 1;
  }
  return result;
}
