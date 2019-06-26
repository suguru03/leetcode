'use strict';

module.exports = { repeatedSubstringPattern };

/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
  const l = s.length;
  let i = l;
  loop: while (--i) {
    if (l % i !== 0) {
      continue;
    }
    const cur = s.slice(l - i, l);
    const size = cur.length;
    for (let j = 0; j < l - 1; j += size) {
      if (s.slice(j, j + size) !== cur) {
        continue loop;
      }
    }
    return true;
  }
  return false;
}
