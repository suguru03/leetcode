'use strict';

module.exports = { maxSubArray, maxSubArray2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let sum = 0;
  let min = 0;
  let max = -Infinity;
  for (const n of nums) {
    sum += n;
    max = Math.max(max, sum - min, n);
    min = Math.min(min, sum);
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray2(nums) {
  let sum = 0;
  let max = -Infinity;
  let i = -1;
  while (++i < nums.length) {
    sum += nums[i];
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}
