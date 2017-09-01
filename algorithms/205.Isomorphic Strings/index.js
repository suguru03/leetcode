'use strict';

module.exports = { isIsomorphic };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  const ms = {};
  const mt = {};
  for (let i = 0; i < s.length; i++) {
    const cs = s[i];
    const ct = t[i];
    if (ms[cs] !== mt[ct]) {
      return false;
    }
    ms[cs] = mt[ct] = i + 1;
  }
  return true;
}
