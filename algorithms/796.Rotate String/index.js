'use strict';

module.exports = { rotateString, rotateString2 };

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function rotateString(A, B) {
  const l = A.length;
  const map = {};
  for (let i = 0; i < l; i++) {
    const c = A[i];
    map[c] = map[c] || [];
    map[c].push(i);
  }
  const arr = map[B[0]] || [];
  for (const index of arr) {
    const str = A.substr(index) + A.substr(0, index);
    if (str === B) {
      return true;
    }
  }
  return false;
}

/**
 * from uwi-san https://leetcode.com/contest/weekly-contest-75/ranking
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function rotateString2(A, B) {
  return A.length === B.length && (A + A).indexOf(B) >= 0;
}
