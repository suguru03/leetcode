'use strict';

module.exports = { isPowerOfThree, isPowerOfThree2, isPowerOfThree3, isPowerOfThree4 };

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

function isPowerOfThree3(n) {
  let r = 0;
  let l = n;
  while (r <= l) {
    const m = ((r + l) / 2) | 0;
    const v = 3 ** m;
    if (v === n) {
      return true;
    }
    if (v < n) {
      r = m + 1;
    } else {
      l = m - 1;
    }
  }
  return false;
}

function isPowerOfThree4(n) {
  return (Math.log10(n) / Math.log10(3)) % 1 === 0;
}
