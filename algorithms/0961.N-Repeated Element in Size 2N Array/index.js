'use strict';

module.exports = { repeatedNTimes };

/**
 * @param {number[]} A
 * @return {number}
 */
function repeatedNTimes(A) {
  while (true) {
    const i = (Math.random() * A.length) | 0;
    const j = (Math.random() * A.length) | 0;
    if (i === j) {
      continue;
    }
    if (A[i] === A[j]) {
      return A[i];
    }
  }
}

/**
 * @see https://leetcode.com/problems/n-repeated-element-in-size-2n-array/discuss/208563/JavaC%2B%2BPython-O(1)-Solution
 * @param {number[]} A
 * @return {number}
 */
function repeatedNTimes2(A) {
  for (let i = 2; i < A.length; i++) {
    if (A[i] === A[i - 1] || A[i] === A[i - 2]) {
      return A[i];
    }
  }
  return A[0];
}
