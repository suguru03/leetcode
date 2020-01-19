'use strict';

module.exports = { getNoZeroIntegers };

/**
 * @param {number} n
 * @return {number[]}
 */
function getNoZeroIntegers(n) {
  for (let n1 = 1; n1 < n; n1++) {
    const n2 = n - n1;
    if (n1.toString().includes('0') || n2.toString().includes('0')) {
      continue;
    }
    return [n1, n2];
  }
}
