'use strict';

module.exports = { findDuplicate, findDuplicate2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  for (const val of nums) {
    const num = Math.abs(val);
    if (nums[num - 1] < 0) {
      return num;
    }
    nums[num - 1] *= -1;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate2(nums) {
  nums.sort((n1, n2) => n1 - n2);
  let l = 0;
  let r = nums.length;
  while (l < r) {
    const m = (l + (r - l) / 2) | 0;
    if (nums[m] > m) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return nums[l];
}
