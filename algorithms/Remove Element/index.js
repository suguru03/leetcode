'use strict';

module.exports = { removeElement, removeElement2 };

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let l = nums.length;
  while (l--) {
    if (nums[l] !== val) {
      continue;
    }
    nums.splice(l, 1);
  }
  return nums.length;
}

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement2(nums, val) {
  let l = nums.length;
  let count = 0;
  while (l--) {
    const n = nums[l];
    if (n !== val) {
      continue;
    }
    const j = nums.length - ++count;
    nums[l] = nums[j];
    nums[j] = n;
  }
  nums.length = nums.length - count;
  return nums.length;
}
