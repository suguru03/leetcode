'use strict';

module.exports = { climbStairs, climbStairs2 };

/**
 * Bottom up
 * @param n
 * @returns {number}
 */
function climbStairs(n) {
  let prev = 0;
  let cur = 1;
  while (--n >= 0) {
    [prev, cur] = [cur, cur + prev];
  }
  return cur;
}

/**
 * Top down
 * @param {number} n
 * @return {number}
 */
function climbStairs2(n) {
  const memo = new Map();
  return climb(n);
  function climb(cur) {
    if (memo.has(cur)) {
      return memo.get(cur);
    }
    if (cur < 0) {
      return 0;
    }
    if (cur === 0) {
      return 1;
    }
    const count = climb(cur - 1) + climb(cur - 2);
    memo.set(cur, count);
    return count;
  }
}
