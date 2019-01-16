'use strict';

module.exports = { peakIndexInMountainArray, peakIndexInMountainArray2 };

/**
 * @param {number[]} A
 * @return {number}
 */
function peakIndexInMountainArray(A) {
  let [prev] = A;
  for (let i = 1; i < A.length; i++) {
    const n = A[i];
    if (n < prev) {
      return i - 1;
    }
    prev = n;
  }
  return -1;
}

/**
 * @param {number[]} A
 * @return {number}
 */
function peakIndexInMountainArray2(A) {
  let left = 0;
  let right = A.length - 1;
  while (left < right) {
    const middle = ((left + right) / 2) | 0;
    if (A[middle] < A[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left;
}
