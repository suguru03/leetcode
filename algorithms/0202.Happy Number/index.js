'use strict';

module.exports = { isHappy, isHappy2 };

/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const memo = new Set([1]);
  while (!memo.has(n)) {
    memo.add(n);
    let next = 0;
    while (n > 0) {
      const rem = n % 10;
      next += Math.pow(rem, 2);
      n -= rem;
      n /= 10;
    }
    n = next;
  }
  return n === 1;
}

/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy2(n) {
  let slow = n;
  let fast = n;
  do {
    slow = sum(slow);
    fast = sum(sum(fast));
  } while (slow !== fast);
  return slow === 1;
}

function sum(n) {
  let s = 0;
  while (n > 0) {
    s += Math.pow(n % 10 | 0, 2);
    n /= 10;
  }
  return s;
}
