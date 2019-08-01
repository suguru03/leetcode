'use strict';

module.exports = { isMonotonic, isMonotonic2 };

/**
 * @param {number[]} A
 * @return {boolean}
 */
function isMonotonic(A) {
  let sign;
  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) {
      continue;
    }
    const s = Math.sign(A[i] - A[i - 1]);
    sign = sign || s;
    if (s !== sign) {
      return false;
    }
  }
  return true;
}

/**
 * @param {number[]} A
 * @return {boolean}
 */
function isMonotonic2(A) {
  return inc(A) || dec(A);
}

function inc(A) {
  for (let i = 1; i < A.length; i++) {
    if (A[i] < A[i - 1]) {
      return false;
    }
  }
  return true;
}

function dec(A) {
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) {
      return false;
    }
  }
  return true;
}
