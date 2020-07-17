'use strict';

module.exports = { numSub };

/**
 * @param {string} s
 * @return {number}
 */
function numSub(s) {
  let cur = 0;
  let result = 0;
  const mod = 1e9 + 7;
  for (const c of s) {
    if (c === '0') {
      cur = 0;
      continue;
    }
    result = (result + ++cur) % mod;
  }
  return result;
}
