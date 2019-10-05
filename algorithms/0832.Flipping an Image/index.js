'use strict';

module.exports = { flipAndInvertImage, flipAndInvertImage2 };

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
function flipAndInvertImage(A) {
  for (const row of A) {
    for (let i = 0; i < A.length / 2; i++) {
      const j = A.length - i - 1;
      [row[i], row[j]] = [row[j] ^ 1, row[i] ^ 1];
    }
  }
  return A;
}

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
function flipAndInvertImage2(A) {
  for (const row of A) {
    let i = Math.ceil(A.length / 2);
    while (i--) {
      const j = A.length - i - 1;
      [row[i], row[j]] = [row[j] ^ 1, row[i] ^ 1];
    }
  }
  return A;
}
