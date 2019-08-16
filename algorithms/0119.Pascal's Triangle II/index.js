'use strict';

module.exports = { getRow };

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  const result = Array(rowIndex);
  result[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    result[i] = 0;
    for (let j = i; j >= 1; j--) {
      result[j] += result[j - 1];
    }
  }
  return result;
}
