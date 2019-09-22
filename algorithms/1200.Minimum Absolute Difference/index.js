'use strict';

module.exports = { minimumAbsDifference };

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
  arr.sort((n1, n2) => n1 - n2);
  let min = Infinity;
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    const a = arr[i - 1];
    const b = arr[i];
    const diff = b - a;
    if (diff > min) {
      continue;
    }
    if (diff < min) {
      min = diff;
      result.length = 0;
    }
    if (min === diff) {
      result.push([a, b]);
    }
  }
  return result;
}
