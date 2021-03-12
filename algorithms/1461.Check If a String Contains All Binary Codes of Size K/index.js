'use strict';

module.exports = { hasAllCodes };

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
function hasAllCodes(s, k) {
  const set = new Set();
  for (let right = k; right <= s.length; right++) {
    set.add(s.slice(right - k, right));
  }
  return set.size === 2 ** k;
}
