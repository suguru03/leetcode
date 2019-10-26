'use strict';

module.exports = { balancedStringSplit };

/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
  let cur = 0;
  let count = 0;
  for (const c of s) {
    cur += c === 'R' ? +1 : -1;
    count += cur === 0 ? 1 : 0;
  }
  return count;
}
