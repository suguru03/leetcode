'use strict';

module.exports = { generate };

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  if (numRows === 0) {
    return [];
  }
  const result = [[1]];
  while (--numRows >= 1) {
    const prev = result[result.length - 1];
    const next = [...prev, 0];
    for (const [i, n] of prev.entries()) {
      next[i + 1] += n;
    }
    result.push(next);
  }
  return result;
}
