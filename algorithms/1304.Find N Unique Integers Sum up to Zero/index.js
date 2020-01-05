'use strict';

module.exports = { sumZero };

/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) {
  const result = [];
  if (n % 2 === 1) {
    result.push(0);
  }
  for (let i = 1; i <= n / 2; i++) {
    result.push(-i, i);
  }
  return result;
}
