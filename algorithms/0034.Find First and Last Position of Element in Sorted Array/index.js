'use strict';

module.exports = { searchRange };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  const left = findLeft(nums, target);
  return [left, findRight(nums, target, left)];
}

function findLeft(nums, target) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    const m = (l + (r - l) / 2) | 0;
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return nums[l] === target ? l : -1;
}

function findRight(nums, target, l) {
  if (l === -1) {
    return -1;
  }
  let r = nums.length;
  while (l + 1 < r) {
    const m = (l + (r - l) / 2) | 0;
    if (nums[m] <= target) {
      l = m;
    } else {
      r = m;
    }
  }
  return l;
}
