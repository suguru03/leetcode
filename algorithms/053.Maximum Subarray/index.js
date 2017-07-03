'use strict';

module.exports = { maxSubArray, maxSubArray2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  let i = -1;
  while (++i < nums.length) {
    const n = nums[i];
    sum += n;
    min = Math.min(min, sum);
    max = Math.max(max, sum, n);
    const diff = sum - min;
    if (diff !== 0) {
      max = Math.max(max, diff);
    }
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
