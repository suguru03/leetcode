'use strict';

module.exports = { findErrorNums };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums) {
  const l = nums.length;
  const arr = Array(l).fill(0);
  const result = Array(2);
  for (const n of nums) {
    if (arr[n - 1]++ === 1) {
      result[0] = n;
    }
  }
  for (let i = 0; i < l; i++) {
    if (arr[i] === 0) {
      result[1] = i + 1;
      return result;
    }
  }
}
