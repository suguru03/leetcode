'use strict';

module.exports = { circularPermutation, circularPermutation2 };

/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
function circularPermutation(n, start) {
  const max = 1 << n;
  const result = Array(max);
  for (let i = 0; i < max; i++) {
    result[i] = i ^ (i >> 1);
  }
  const index = result.indexOf(start);
  return [...result.slice(index), ...result.slice(0, index)];
}

/**
 * @see https://leetcode.com/problems/circular-permutation-in-binary-representation/discuss/414203/JavaC%2B%2BPython-4-line-Gray-Code
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
function circularPermutation2(n, start) {
  const max = 1 << n;
  const result = Array(max);
  for (let i = 0; i < max; i++) {
    result[i] = start ^ i ^ (i >> 1);
  }
  return result;
}
