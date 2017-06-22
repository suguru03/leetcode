'use strict';

module.exports = { maxSubArray };

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  let result = -Infinity;
  let i = -1;
  while (++i < nums.length) {
    const n = nums[i];
    sum += n;
    min = Math.min(min, sum);
    max = Math.max(max, sum);
    result = Math.max(result, sum, n);
    const diff = sum - min;
    if (diff !== 0) {
      result = Math.max(result, diff);
    }
  }
  return result;
}
