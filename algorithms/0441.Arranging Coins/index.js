'use strict';

module.exports = { arrangeCoins };

/**
 * @param {number} n
 * @return {number}
 */
function arrangeCoins(n) {
  let cur = 0;
  while (++cur <= n) {
    n -= cur;
  }
  return cur - 1;
}
