'use strict';

module.exports = { tribonacci, tribonacci2 };

const map = new Map();

/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
  if (map.has(n)) {
    return map.get(n);
  }
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  const val = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  map.set(n, val);
  return val;
}

/**
 * @param {number} n
 * @return {number}
 */
function tribonacci2(n) {
  if (n < 2) {
    return n;
  }
  if (n === 2) {
    return 1;
  }
  let n1 = 0;
  let n2 = 1;
  let n3 = 1;
  while (--n > 2) {
    [n3, n2, n1] = [n1 + n2 + n3, n3, n2];
  }
  return n1 + n2 + n3;
}
