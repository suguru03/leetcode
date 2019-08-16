'use strict';

module.exports = { shiftingLetters };

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
function shiftingLetters(S, shifts) {
  let x = 0;
  const cnum = 26;
  const base = 97;
  for (const shift of shifts) {
    x = (x + shift) % cnum;
  }
  const result = [];
  for (let i = 0; i < S.length; i++) {
    const code = S[i].charCodeAt() - base;
    result.push(String.fromCharCode(((code + x) % cnum) + base));
    x = (x - shifts[i]) % cnum;
    x = x >= 0 ? x : x + cnum;
  }
  return result.join('');
}
