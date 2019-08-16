'use strict';

module.exports = { repeatedStringMatch };

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
function repeatedStringMatch(A, B) {
  let str = A;
  let count = 1;
  while (!str.includes(B)) {
    if (str.length - A.length > B.length) {
      return -1;
    }
    count++;
    str += A;
  }
  return count;
}
