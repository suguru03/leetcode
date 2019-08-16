'use strict';

module.exports = { findUnsortedSubarray: findUnsortedSubarray3 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
  const arr = [...nums];
  arr.sort((n1, n2) => n1 - n2);
  const size = nums.length;
  let l = size;
  let r = 0;
  for (let i = 0; i < size; i++) {
    if (arr[i] !== nums[i]) {
      l = Math.min(l, i);
      r = Math.max(r, i);
    }
  }
  return r <= l ? 0 : r - l + 1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray2(nums) {
  let min = Infinity;
  let max = -min;
  const size = nums.length;

  let flag;
  let i = 0;
  while (++i < size) {
    const n = nums[i];
    if (n < nums[i - 1]) {
      flag = true;
    }
    if (flag) {
      min = Math.min(min, n);
    }
  }

  flag = false;
  i = size - 1;
  while (--i >= 0) {
    const n = nums[i];
    if (n > nums[i + 1]) {
      flag = true;
    }
    if (flag) {
      max = Math.max(max, n);
    }
  }

  let l = -1;
  let r = size;
  while (++l < size && min >= nums[l]) {}
  while (--r >= 0 && max <= nums[r]) {}
  return r < l ? 0 : r - l + 1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray3(nums) {
  let l = -1;
  let r = -2;
  let n = nums.length;
  let min = Infinity;
  let max = -min;
  for (let i = 0; i < n; i++) {
    const j = n - i - 1;
    const n1 = nums[i];
    const n2 = nums[j];
    max = Math.max(max, n1);
    min = Math.min(min, n2);
    if (n1 < max) {
      r = i;
    }
    if (n2 > min) {
      l = j;
    }
  }
  return r - l + 1;
}
