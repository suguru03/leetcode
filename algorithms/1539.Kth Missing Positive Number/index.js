'use strict';

module.exports = { findKthPositive };

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
