'use strict';

module.exports = { isHappy, isHappy2 };

/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  const memo = {};
  while (!memo[n]) {
    if (n === 1) {
      return true;
    }
    memo[n] = true;
    let s = 0;
    while (n > 0) {
      s += Math.pow(n % 10 | 0, 2);
      n /= 10;
    }
    n = s;
  }
  return false;
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
