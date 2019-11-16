'use strict';

module.exports = { reconstructMatrix };

/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
function reconstructMatrix(upper, lower, colsum) {
  const size = colsum.length;
  const indices = [];
  const upperList = Array(size).fill(0);
  const lowerList = Array(size).fill(0);
  for (let i = 0; i < size; i++) {
    switch (colsum[i]) {
      case 1:
        indices.push(i);
        break;
      case 2:
        upper--;
        lower--;
        upperList[i] = 1;
        lowerList[i] = 1;
        break;
    }
  }
  for (const i of indices) {
    if (upper > 0) {
      upper--;
      upperList[i] = 1;
      continue;
    }
    if (lower > 0) {
      lower--;
      lowerList[i] = 1;
      continue;
    }
    return [];
  }
  if (upper !== 0 || lower !== 0) {
    return [];
  }
  return [upperList, lowerList];
}
