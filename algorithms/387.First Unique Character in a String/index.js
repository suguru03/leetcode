'use strict';

module.exports = { firstUniqChar, firstUniqChar2 };

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const map = {};
  const l = s.length;
  for (let i = 0; i < l; i++) {
    const c = s.charAt(i);
    map[c] = map[c] === undefined ? i : -1;
  }
  for (let i = 0; i < l; i++) {
    if (map[s.charAt(i)] >= 0) {
      return i;
    }
  }
  return -1;
}

/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar2(s) {
  const array = Array(26).fill(0);
  const l = s.length;
  for (let i = 0; i < l; i++) {
    array[s[i].charCodeAt() - 97]++;
  }
  for (let i = 0; i < l; i++) {
    if (array[s[i].charCodeAt() - 97] === 1) {
      return i;
    }
  }
  return -1;
}
