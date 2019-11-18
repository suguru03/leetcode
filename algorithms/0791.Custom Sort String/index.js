'use strict';

module.exports = { customSortString, customSortString2 };

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
function customSortString(S, T) {
  const indices = Array(26).fill(Infinity);
  for (let i = 0; i < S.length; i++) {
    indices[S.charCodeAt(i) - 97] = i;
  }
  return T.split('')
    .sort((i1, i2) => indices[i1.charCodeAt(0) - 97] - indices[i2.charCodeAt(0) - 97])
    .join('');
}

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
function customSortString2(S, T) {
  const map = new Map();
  for (const c of T) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }
  let result = '';
  for (const c of S) {
    let count = map.get(c) || 0;
    map.delete(c);
    while (count--) {
      result += c;
    }
  }
  for (let [c, count] of map) {
    while (count--) {
      result += c;
    }
  }
  return result;
}
