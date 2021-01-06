'use strict';

module.exports = { findKthPositive, findKthPositive2 };

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthPositive(arr, k) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = (left + (right - left) / 2) | 0;
    const missing = arr[mid] - mid - 1;
    if (missing < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return k + left;
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthPositive2(arr, k) {
  let missing = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    missing += n - i - 1 - missing;
    if (missing < k) {
      continue;
    }
    return n - (missing - k + 1);
  }
  return arr[arr.length - 1] + k - missing;
}
