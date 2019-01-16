'use strict';

module.exports = { reverseString, reverseString2 };

/**
 * @param {string} s
 * @return {string}
 */
function reverseString(s) {
  let l = s.length;
  let result = '';
  while (l--) {
    result += s[l];
  }
  return result;
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseString2(s) {
  let l = s.length;
  if (l <= 1) {
    return s;
  }
  const even = l % 2 === 0;
  if (even) {
    s += 'a';
  }
  l = (l / 2) | 0;
  let middle = l;
  let result = s[l];
  while (l--) {
    result = `${s[2 * middle - l]}${result}${s[l]}`;
  }
  return even ? result.substr(1, result.length) : result;
}
