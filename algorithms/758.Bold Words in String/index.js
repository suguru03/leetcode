'use strict';

module.exports = { boldWords };

/**
 * https://leetcode.com/contest/weekly-contest-66/ranking/1/ from uwi-san
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
function boldWords(words, S) {
  const l = S.length;
  if (!l) {
    return S;
  }
  const arr = Array(l + 1).fill(0);
  for (const word of words) {
    const lw = word.length;
    for (let i = 0; i <= l - lw; i++) {
      const s = S.substr(i, lw);
      if (s === word) {
        arr[i]++;
        arr[i + lw]--;
      }
    }
  }
  for (let i = 0; i < l; i++) {
    arr[i + 1] += arr[i];
  }
  let result = '';
  for (let i = 0; i < l; i++) {
    const c = S[i];
    if (arr[i] > 0) {
      result += `<b>${c}</b>`;
    } else {
      result += c;
    }
  }
  return result.replace(/<\/b><b>/g, '');
}
