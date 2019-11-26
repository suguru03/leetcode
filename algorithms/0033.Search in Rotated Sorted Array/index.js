'use strict';

module.exports = { search, search2 };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length;
  const last = nums[nums.length - 1];
  while (left < right) {
    const mid = ((left + right) / 2) | 0;
    const num = nums[mid];
    if (num > last) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  right = left + nums.length;
  while (left < right) {
    const mid = ((left + right) / 2) | 0;
    const index = mid % nums.length;
    const num = nums[index];
    if (num === target) {
      return index;
    }
    if (num < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search2(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  function isInRange(leftIndex, rightIndex) {
    const left = nums[leftIndex];
    const right = nums[rightIndex];
    if (left > right) {
      return target >= left || target <= right;
    }
    return target >= left && target <= right;
  }

  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    const num = nums[mid];
    if (num === target) {
      return mid;
    }
    if (isInRange(left, mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
