'use strict';

module.exports = { reverseWords, reverseWords2, reverseWords3, reverseWords4 };

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  let word = '';
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c !== ' ') {
      word = c + word;
      continue;
    }
    result += word + ' ';
    word = '';
  }
  return result + word;
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords2(s) {
  return s
    .split(' ')
    .map(w =>
      w
        .split('')
        .reverse()
        .join(''),
    )
    .join(' ');
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords3(s) {
  return s
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords4(s) {
  return ['', ' '].map(
    c =>
      (s = s
        .split(c)
        .reverse()
        .join(c)),
  )[1];
}
