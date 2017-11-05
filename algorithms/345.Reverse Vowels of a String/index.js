'use strict';

module.exports = { reverseVowels };

const map = ['a', 'e', 'i', 'o', 'u'].reduce((map, c) => {
  map[c] = map[c.toUpperCase()] = true;
  return map;
}, {});

/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  let left = 0;
  let right = s.length - 1;
  if (right <= left) {
    return s;
  }
  let sl = '';
  let sr = '';
  while (left <= right) {
    let cl = '';
    while (left <= right) {
      cl = s[left++];
      if (map[cl]) {
        break;
      }
      sl += cl;
      cl = '';
    }
    let cr = '';
    while (left <= right) {
      cr = s[right--];
      if (map[cr]) {
        break;
      }
      sr = `${cr}${sr}`;
      cr = '';
    }
    sl += cr;
    sr = `${cl}${sr}`;
  }
  return `${sl}${sr}`;
}
