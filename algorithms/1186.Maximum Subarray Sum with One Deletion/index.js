'use strict';

module.exports = { maximumSum };

/**
 * @param {number[]} arr
 * @return {number}
 */
function maximumSum(arr) {
  let max = -Infinity;
  let d0 = max;
  let d1 = max;
  for (const n of arr) {
    [d0, d1] = [Math.max(d0 + n, n), Math.max(d0, d1 + n)];
    max = Math.max(max, d0, d1);
  }
  return max;
}
