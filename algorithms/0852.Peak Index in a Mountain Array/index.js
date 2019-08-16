'use strict';

module.exports = { peakIndexInMountainArray, peakIndexInMountainArray2 };

/**
 * @param {number[]} A
 * @return {number}
 */
function peakIndexInMountainArray(A) {
  let l = 0;
  let r = A.length - 1;
  while (l < r) {
    const m = ((l + r) / 2) | 0;
    if (A[m] < A[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
}

/**
 * @see https://leetcode.com/problems/peak-index-in-a-mountain-array/discuss/139848/C%2B%2BJavaPython-Better-than-Binary-Search
 * @param {number[]} A
 * @return {number}
 */
function peakIndexInMountainArray2(A) {
  let l = 0;
  let r = A.length - 1;
  let x1 = gold1(l, r);
  let x2 = gold2(l, r);
  while (x1 < x2) {
    if (A[x1] < A[x2]) {
      [l, x1, x2] = [x1, x2, gold1(x2, r)];
    } else {
      [r, x2, x1] = [x2, x1, gold2(l, x1)];
    }
  }
  return ((l + r) / 2) | 0;
}

function gold1(l, r) {
  return l + Math.round((r - l) * 0.382);
}

function gold2(l, r) {
  return l + Math.round((r - l) * 0.618);
}
