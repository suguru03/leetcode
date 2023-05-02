'use strict';

module.exports = { arraySign };

const mask = ~(-1 >>> 1);

/**
 * @param {number[]} nums
 * @return {number}
 */
function arraySign(nums) {
  let sign = 1;
  for (const n of nums) {
    if (n === 0) {
      return 0;
    }

    sign ^= (n & mask) === mask;
  }

  return sign === 1 ? 1 : -1;
}
