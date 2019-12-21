'use strict';

module.exports = { sequentialDigits };

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
function sequentialDigits(low, high) {
  const result = [];
  for (let i = 1; i <= 9; i++) {
    let cur = 0;
    for (let j = i; j <= 9; j++) {
      cur = cur * 10 + j;
      if (cur < low) {
        continue;
      }
      if (cur > high) {
        break;
      }
      result.push(cur);
    }
  }
  return result.sort((n1, n2) => n1 - n2);
}
