'use strict';

module.exports = { judgeSquareSum, judgeSquareSum2, judgeSquareSum3 };

/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
  let left = 0;
  let right = Math.sqrt(c) | 0;
  while (left <= right) {
    const num = left ** 2 + right ** 2;
    if (num === c) {
      return true;
    }
    if (num < c) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum2(c) {
  const set = new Set();
  for (let i = 0; i <= Math.sqrt(c); i++) {
    const n = i ** 2;
    const diff = c - n;
    if (set.has(diff) || n === diff) {
      return true;
    }
    set.add(n);
  }
  return false;
}

/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum3(c) {
  for (let n = 0; n <= Math.sqrt(c); n++) {
    if (Math.sqrt(c - n ** 2) % 1 === 0) {
      return true;
    }
  }
  return false;
}
