'use strict';

module.exports = { findMaxConsecutiveOnes, findMaxConsecutiveOnes2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let count = 0;
  let l = nums.length;
  while (l--) {
    const n = nums[l];
    if (n === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return Math.max(max, count);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes2(nums) {
  let max = 0;
  let count = 0;
  let l = nums.length;
  while (l--) {
    const n = nums[l];
    if (n === 0) {
      count = 0;
    } else {
      max = Math.max(max, ++count);
    }
  }
  return max;
}
