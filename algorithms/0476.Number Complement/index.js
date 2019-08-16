'use strict';

module.exports = { findComplement, findComplement2 };

/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
  let ans = 0;
  let shift = 0;
  do {
    ans |= !(num & 1) << shift++;
  } while ((num >>= 1));
  return ans;
}

/**
 * @param {number} num
 * @return {number}
 */
function findComplement2(num) {
  return num ^ (Math.pow(2, Math.ceil(Math.log2(num + 1))) - 1);
}

// 01000
// 10111
