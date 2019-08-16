'use strict';

module.exports = { uniqueLetterString };

/**
 * https://leetcode.com/contest/weekly-contest-83/ranking from uwi-san
 * @param {string} S
 * @return {number}
 */
function uniqueLetterString(S) {
  const n = S.length;
  let ret = 0;
  for (let i = 0; i < n; i++) {
    let l = i - 1;
    while (l >= 0 && S[l] !== S[i]) {
      l--;
    }
    let r = i + 1;
    while (r < n && S[r] !== S[i]) {
      r++;
    }
    ret += (r - i) * (i - l);
  }
  const mod = 1000000007;
  return ret % mod;
}
