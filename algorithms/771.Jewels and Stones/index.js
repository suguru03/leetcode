'use strict';

module.exports = { numJewelsInStones };

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
function numJewelsInStones(J, S) {
  const map = {};
  for (let i = 0; i < S.length; i++) {
    const c = S[i];
    map[c] = ++map[c] || 1;
  }
  let result = 0;
  for (let i = 0; i < J.length; i++) {
    const n = map[J[i]];
    if (n) {
      result += n;
    }
  }
  return result;
}
