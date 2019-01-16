'use strict';

module.exports = { findClosestElements, findClosestElements2 };

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    const diff = i - start;
    if (n < x) {
      if (diff >= k) {
        start++;
      }
      continue;
    }
    if (diff < k) {
      continue;
    }
    const ns = arr[start];
    if (x - ns <= n - x) {
      return arr.slice(start, i);
    }
    start++;
  }
  return arr.slice(start);
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements2(arr, k, x) {
  return arr
    .sort(compare)
    .slice(0, k)
    .sort((n1, n2) => n1 - n2);
  function compare(n1, n2) {
    const a1 = Math.abs(x - n1);
    const a2 = Math.abs(x - n2);
    return a1 === a2 ? n1 - n2 : a1 - a2;
  }
}
