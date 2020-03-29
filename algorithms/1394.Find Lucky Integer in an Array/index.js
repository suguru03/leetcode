'use strict';

module.exports = { findLucky, findLucky2 };

/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky(arr) {
  const list = Array(501).fill(0);
  for (const n of arr) {
    list[n]++;
  }
  for (let i = 500; i >= 1; i--) {
    if (list[i] === i) {
      return i;
    }
  }
  return -1;
}

/**
 * @param {number[]} arr
 * @return {number}
 */
function findLucky2(arr) {
  const offset = arr.length + 1;
  for (const num of arr) {
    const n = num % offset;
    if (n > arr.length) {
      continue;
    }
    arr[n - 1] += offset;
  }
  for (let n = arr.length; n >= 1; n--) {
    const count = (arr[n - 1] / offset) | 0;
    if (count === n) {
      return n;
    }
  }
  return -1;
}
