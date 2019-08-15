'use strict';

module.exports = { getHint, getHint2 };

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint(secret, guess) {
  let a = 0;
  let b = 0;
  const mapS = {};
  const mapG = {};
  for (let i = 0; i < secret.length; i++) {
    const s = secret[i];
    const g = guess[i];
    if (s === g) {
      a++;
      continue;
    }
    if (mapS[g]) {
      b++;
      mapS[g]--;
    } else {
      mapG[g] = ++mapG[g] || 1;
    }
    if (mapG[s]) {
      b++;
      mapG[s]--;
    } else {
      mapS[s] = ++mapS[s] || 1;
    }
  }
  return `${a}A${b}B`;
}

/**
 * @see https://leetcode.com/problems/bulls-and-cows/discuss/74621/One-pass-Java-solution
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint2(secret, guess) {
  let a = 0;
  let b = 0;
  const arr = Array(10).fill(0);
  for (let i = 0; i < secret.length; i++) {
    const s = secret[i];
    const g = guess[i];
    if (s === g) {
      a++;
      continue;
    }
    if (arr[s] < 0) {
      b++;
    }
    if (arr[g] > 0) {
      b++;
    }
    arr[s]++;
    arr[g]--;
  }
  return `${a}A${b}B`;
}
