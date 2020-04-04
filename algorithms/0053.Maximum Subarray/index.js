'use strict';

module.exports = { maxSubArray, maxSubArray2, maxSubArray3 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let sum = 0;
  let min = 0;
  let max = -Infinity;
  for (const num of nums) {
    sum += num;
    max = Math.max(max, sum - min, num);
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
  for (const num of nums) {
    sum += num;
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray3(nums) {
  let cur = 0;
  let max = -Infinity;
  for (const n of nums) {
    cur = Math.max(cur + n, n);
    max = Math.max(max, cur);
  }
  return max;
}
