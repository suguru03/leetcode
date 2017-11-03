'use strict';

module.exports = { isPowerOfThree, isPowerOfThree2 };

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  if (n < 1) {
    return false;
  }
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}

function isPowerOfThree2(n) {
  return n > 0 && 1162261467 % n === 0;
}
