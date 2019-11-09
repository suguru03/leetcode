'use strict';

module.exports = { isSubsequence, isSubsequence2 };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
  let left = 0;
  for (const c of t) {
    if (c === s[left]) {
      left++;
    }
  }
  return left === s.length;
}
