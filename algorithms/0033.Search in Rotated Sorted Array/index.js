'use strict';

module.exports = { search, search2 };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  const size = nums.length;
  if (size === 0) {
    return -1;
  }
  // find max
  let left = 0;
  let right = size - 1;
  let mid;
  const first = nums[left];
  while (left <= right) {
    mid = ((left + right) / 2) | 0;
    const num = nums[mid];
    if (num === target) {
      return mid;
    }
    if (num > nums[mid + 1]) {
      break;
    }
    if (num < first) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  left = (mid + 1) % size;
  right = left + size - 1;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    const index = mid % size;
    const num = nums[index];
    if (num === target) {
      return index;
    }
    if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
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
