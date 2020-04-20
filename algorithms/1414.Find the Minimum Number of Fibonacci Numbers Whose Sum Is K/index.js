'use strict';

module.exports = { findMinFibonacciNumbers };

/**
 * @param {number} k
 * @return {number}
 */
function findMinFibonacciNumbers(k) {
  const nums = [1, 1];
  while (nums[nums.length - 1] < k) {
    nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
  }
  let count = 0;
  while (k > 0) {
    let left = 0;
    let right = nums.length;
    while (left + 1 < right) {
      const mid = ((left + right) / 2) | 0;
      const num = nums[mid];
      if (num > k) {
        right = mid;
      } else {
        left = mid;
      }
    }
    k -= nums[left];
    count++;
  }
  return count;
}
