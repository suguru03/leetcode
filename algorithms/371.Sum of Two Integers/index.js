'use strict';

module.exports = { getSum };

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
  let r = a;
  let n = b;
  while (n !== 0) {
    a = r;
    r ^= n;
    n = (a & n) << 1;
  }
  return r;
}
