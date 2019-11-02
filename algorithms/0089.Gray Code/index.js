'use strict';

module.exports = { grayCode };

/**
 * @param {number} n
 * @return {number[]}
 */
function grayCode(n) {
  const max = 1 << n;
  const result = Array(max);
  for (let i = 0; i < max; i++) {
    result[i] = i ^ (i >> 1);
  }
  return result;
}
