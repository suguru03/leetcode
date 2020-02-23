'use strict';

module.exports = { closestDivisors };

/**
 * @param {number} num
 * @return {number[]}
 */
function closestDivisors(num) {
  const n1 = num + 1;
  const n2 = num + 2;
  for (let n = Math.sqrt(n2) | 0; n >= 0; n--) {
    if ((n1 / n) % 1 === 0) {
      return [n, n1 / n];
    }
    if ((n2 / n) % 1 === 0) {
      return [n, n2 / n];
    }
  }
}
