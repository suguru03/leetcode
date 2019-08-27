'use strict';

module.exports = { rotateString, rotateString2, rotateString3 };

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function rotateString(A, B) {
  const l = A.length;
  const t = B[0];
  for (let i = 0; i < l; i++) {
    const c = A[i];
    if (c !== t) {
      continue;
    }
    const str = A.substr(i) + A.substr(0, i);
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

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
function rotateString3(A, B) {
  return A.length === B.length && (A + A).includes(B);
}
