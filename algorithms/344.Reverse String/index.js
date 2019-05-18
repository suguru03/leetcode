'use strict';

module.exports = { reverseString, reverseString2 };

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  const l = s.length;
  reverse(0);

  function reverse(i) {
    const j = l - i - 1;
    if (j <= i) {
      return;
    }
    [s[i], s[j]] = [s[j], s[i]];
    reverse(++i);
  }
}

function reverseString2(s) {
  let i = -1;
  const l = s.length;
  while (++i < ((l / 2) | 0)) {
    const j = l - i - 1;
    [s[i], s[j]] = [s[j], s[i]];
  }
}

// /**
//  * @param {string} s
//  * @return {string}
//  */
// function reverseString(s) {
//   let l = s.length;
//   let result = '';
//   while (l--) {
//     result += s[l];
//   }
//   return result;
// }
//
// /**
//  * @param {string} s
//  * @return {string}
//  */
// function reverseString2(s) {
//   let l = s.length;
//   if (l <= 1) {
//     return s;
//   }
//   const even = l % 2 === 0;
//   if (even) {
//     s += 'a';
//   }
//   l = (l / 2) | 0;
//   let middle = l;
//   let result = s[l];
//   while (l--) {
//     result = `${s[2 * middle - l]}${result}${s[l]}`;
//   }
//   return even ? result.substr(1, result.length) : result;
// }
