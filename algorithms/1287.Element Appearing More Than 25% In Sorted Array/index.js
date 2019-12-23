'use strict';

module.exports = { findSpecialInteger };

/**
 * @param {number[]} arr
 * @return {number}
 */
function findSpecialInteger(arr) {
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[left] !== arr[i]) {
      left = i;
      continue;
    }
    if (i - left >= ((arr.length / 4) | 0)) {
      return arr[left];
    }
  }
}
