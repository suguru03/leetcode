'use strict';

module.exports = { removeDuplicates, removeDuplicates2, removeDuplicates3 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let l = nums.length;
  let prev;
  while (l--) {
    const n = nums[l];
    if (n === prev) {
      nums.splice(l, 1);
    } else {
      prev = n;
    }
  }
  return nums.length;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates2(nums) {
  let l = nums.length;
  let prev;
  while (l--) {
    const n = nums[l];
    if (n === prev) {
      nums.splice(l, 1);
    } else {
      prev = n;
    }
  }
  return nums.length;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates3(nums) {
  let l = nums.length;
  let prev;
  const array = [];
  while (l--) {
    const n = nums[l];
    if (prev !== n) {
      array.push(n);
    }
  }
  nums.length = 0;
  Array.prototype.push.apply(nums, array);
  return nums.length;
}
