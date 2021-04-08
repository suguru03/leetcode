'use strict';

module.exports = { halvesAreAlike };

const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

/**
 * @param {string} s
 * @return {boolean}
 */
function halvesAreAlike(s) {
  let c1 = 0;
  let c2 = 0;
  const size = s.length >> 1;
  for (let i = 0; i < size; i++) {
    if (vowelSet.has(s[i])) {
      c1++;
    }
    if (vowelSet.has(s[i + size])) {
      c2++;
    }
  }
  return c1 === c2;
}
