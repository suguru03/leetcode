'use strict';

module.exports = { removeElement, removeElement2, removeElement3 };

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
  const l = nums.length;
  let i = l;
  let count = 0;
  while (i--) {
    if (nums[i] !== val) {
      continue;
    }
    nums[i] = nums[l - ++count];
  }
  nums.length = l - count;
  return nums.length;
}

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement3(nums, val) {
  const l = nums.length;
  let i = l;
  let count = 0;
  while (i--) {
    if (nums[i] !== val) {
      continue;
    }
    nums[i] = nums[l - ++count];
    nums.length--;
  }
  return nums.length;
}
