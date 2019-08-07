'use strict';

module.exports = { rotatedDigits };

/**
 * @param {number} N
 * @return {number}
 */
function rotatedDigits(N) {
  let count = 0;
  do {
    if (isGoodNum(N)) {
      count++;
    }
  } while (--N);
  return count;
}

function isGoodNum(n) {
  let good = false;
  while (n >= 1) {
    const r = n % 10;
    switch (r) {
      case 0:
      case 1:
      case 8:
        break;
      case 2:
      case 5:
      case 6:
      case 9:
        good = true;
        break;
      default:
        return false;
    }
    n = (n / 10) | 0;
  }
  return good;
}
