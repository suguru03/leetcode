'use strict';

module.exports = { isSubsequence, isSubsequence2 };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
  let it = -1;
  loop: for (const c of s) {
    while (++it < t.length) {
      if (c === t[it]) {
        continue loop;
      }
    }
    return false;
  }
  return true;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence2(s, t) {
  let is = 0;
  for (const c of t) {
    if (c === s[is]) {
      is++;
    }
  }
  return is === s.length;
}
