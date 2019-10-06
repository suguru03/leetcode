'use strict';

module.exports = { longestMountain, longestMountain2 };

/**
 * @param {number[]} A
 * @return {number}
 */
function longestMountain(A) {
  let max = 0;
  const l = A.length;
  for (let c = 1; c < l - 1; c++) {
    const n = A[c];
    let nl = A[c - 1];
    let nr = A[c + 1];
    if (nl >= n || nr >= n) {
      continue;
    }
    let left = 1;
    while (A[c - left - 1] < nl) {
      nl = A[c - ++left];
    }
    let right = 1;
    while (A[c + right + 1] < nr) {
      nr = A[c + ++right];
    }
    max = Math.max(max, left + right + 1);
  }
  return max;
}

/**
 * @param {number[]} A
 * @return {number}
 */
function longestMountain2(A) {
  let max = 0;
  let left = 0;
  while (left < A.length - 2) {
    while (A[left + 1] <= A[left]) {
      left++;
    }
    let mid = left;
    while (A[mid + 1] > A[mid]) {
      mid++;
    }
    let right = mid;
    while (A[right + 1] < A[right]) {
      right++;
    }
    if (right !== mid) {
      max = Math.max(max, right - left + 1);
    }
    left = right;
  }
  return max;
}
