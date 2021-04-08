'use strict';

module.exports = { halvesAreAlike };

const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

/**
 * @param {string} s
 * @return {boolean}
 */
function halvesAreAlike(s) {
  let count = 0;
  const size = s.length >> 1;
  for (let i = 0; i < size; i++) {
    count += ~~vowelSet.has(s[i]) - ~~vowelSet.has(s[i + size]);
  }
  return count === 0;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function halvesAreAlike2(s) {
  return s.split('').reduce((sum, c, i) => sum + (((i < s.length >> 1) << 1) - 1) * ~~/[aeiou]/i.test(c), 0) === 0;
}
