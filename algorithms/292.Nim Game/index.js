'use strict';

module.exports = { canWinNim };

/**
 * @param {number} n
 * @return {boolean}
 */
function canWinNim(n) {
  return n % 4 !== 0;
}
