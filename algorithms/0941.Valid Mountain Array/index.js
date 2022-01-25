'use strict';

const _ = require('lodash');

module.exports = { validMountainArray, validMountainArray2, validMountainArray3 };

/**
 * @param {number[]} A
 * @return {boolean}
 */
function validMountainArray(A) {
  const size = A.length;
  if (size < 3) {
    return false;
  }
  let l = -1;
  let r = size;
  while (++l < size && A[l] < A[l + 1]) {}
  while (--r > 0 && A[r - 1] > A[r]) {}
  return l === r && l !== 0 && l !== size - 1;
}

/**
 * @param {number[]} A
 * @return {boolean}
 */
function validMountainArray2(A) {
  const n = A.length;
  let i = -1;
  while (++i < n && A[i] < A[i + 1]) {}
  if (i === 0 || i === n - 1) {
    return false;
  }
  while (++i < n && A[i - 1] > A[i]) {}
  return i === n;
}

/**
 * @param {number[]} A
 * @return {boolean}
 */
function validMountainArray3(A) {
  const left = _.findIndex(A, (v, i) => v <= A[i - 1]) - 1;
  const right = _.findLastIndex(A, (v, i) => v <= A[i + 1]) + 1;
  return left === right && left > 0 && left < A.length;
}
