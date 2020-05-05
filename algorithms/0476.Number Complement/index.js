'use strict';

module.exports = { findComplement };

/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
  return num ^ ((1 << (Math.log2(num) + 1)) - 1);
}
