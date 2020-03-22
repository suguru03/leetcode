'use strict';

module.exports = { findTheDistanceValue };

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
function findTheDistanceValue(arr1, arr2, d) {
  let count = 0;
  loop: for (const n1 of arr1) {
    for (const n2 of arr2) {
      if (Math.abs(n1 - n2) <= d) {
        continue loop;
      }
    }
    count++;
  }
  return count;
}
