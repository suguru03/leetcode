'use strict';

module.exports = { isPowerOfFour };

/**
 * @param {number} num
 * @return {boolean}
 */
function isPowerOfFour(num) {
  return num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) === num;
}
