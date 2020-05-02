'use strict';

module.exports = { numJewelsInStones };

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones(J, S) {
  const set = new Set(J);
  return S.split('').reduce((sum, c) => sum + ~~set.has(c), 0);
}
