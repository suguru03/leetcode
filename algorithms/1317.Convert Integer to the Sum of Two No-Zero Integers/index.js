'use strict';

module.exports = { getNoZeroIntegers };

/**
 * @param {number} n
 * @return {number[]}
 */
function getNoZeroIntegers(n) {
  for (let i = 1; i < n; i++) {
    const n2 = n - i;
    if (/0/.test(i.toString()) || /0/.test(n2.toString())) {
      continue;
    }
    return [i, n2];
  }
}
