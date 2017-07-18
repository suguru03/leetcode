'use strict';

module.exports = { generate };

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const result = Array(numRows);
  if (!numRows) {
    return result;
  }
  for (let i = 0; i < numRows; i++) {
    const array = Array(i + 1);
    result[i] = array;
    array[0] = 1;
    const prev = result[i - 1];
    for (let j = 1; j <= i; j++) {
      const n0 = prev[j - 1];
      const n1 = prev[j] || 0;
      array[j] = n0 + n1;
    }
  }
  return result;
}
