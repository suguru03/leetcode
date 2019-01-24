'use strict';

module.exports = { climbStairs };

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let prev = 1;
  let cur = n < 2 ? n : 2;
  while (--n > 1) {
    [cur, prev] = [cur + prev, cur];
  }
  return cur;
}
