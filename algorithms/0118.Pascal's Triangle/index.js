'use strict';

module.exports = { generate };

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    const prev = result[result.length - 1] || [];
    const next = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        next.push(1);
        continue;
      }
      next.push(prev[j] + prev[j - 1]);
    }
    result.push(next);
  }
  return result;
}
