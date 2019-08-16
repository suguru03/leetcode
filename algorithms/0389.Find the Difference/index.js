'use strict';

module.exports = { findTheDifference, findTheDifference2 };

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
  const array = Array(26).fill(0);
  let l = s.length;
  while (l--) {
    array[s[l].charCodeAt() - 97]++;
  }
  l = t.length;
  while (l--) {
    const c = t[l];
    if (array[c.charCodeAt() - 97]-- === 0) {
      return c;
    }
  }
  return '';
}

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference2(s, t) {
  let l = s.length;
  let result = t[l].charCodeAt();
  while (l--) {
    result += t[l].charCodeAt() - s[l].charCodeAt();
  }
  return String.fromCharCode(result);
}
