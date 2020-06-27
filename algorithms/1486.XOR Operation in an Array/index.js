'use strict';

module.exports = { xorOperation };

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
function xorOperation(n, start) {
  let res = 0;
  while (--n >= 0) {
    res ^= start + n * 2;
  }
  return res;
}
