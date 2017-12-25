'use strict';

module.exports = { isAnagram };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  const sl = s.length;
  const tl = t.length;
  if (sl !== tl) {
    return false;
  }
  const map = {};
  for (let i = 0; i < sl; i++) {
    const c = s[i];
    map[c] = ++map[c] || 1;
  }
  for (let i = 0; i < tl; i++) {
    const c = t[i];
    if (!map[c]) {
      return false;
    }
    map[c]--;
  }
  return true;
}
