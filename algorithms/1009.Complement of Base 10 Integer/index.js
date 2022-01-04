'use strict';

module.exports = { bitwiseComplement };

/**
 * @param {number} n
 * @return {number}
 */
function bitwiseComplement(n) {
  return n ^ ((1 << (Math.log2(n || 1) + 1)) - 1);
}
