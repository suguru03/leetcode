'use strict';

module.exports = { splitArraySameAverage };

/**
 * @param {number[]} A
 * @return {boolean}
 */
function splitArraySameAverage(A) {
  const l = A.length;
  return cal(0, 0, 0, 0, -1, true);

  function cal(B, C, bc, cc, i) {
    if (++i === l) {
      return B / bc === C / cc;
    }
    const n = A[i];
    return cal(B + n, C, bc + 1, cc, i) || cal(B, C + n, bc, cc + 1, i);
  }
}
