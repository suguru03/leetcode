'use strict';

module.exports = { matrixReshape };

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
function matrixReshape(nums, r, c) {
  const cl = nums.length;
  const rl = nums[0].length;
  const m = cl * rl;
  if (!m || m !== r * c) {
    return nums;
  }
  const result = Array(r);
  for (let i = 0; i < r; i++) {
    result[i] = new Array(c);
  }
  for (let i = 0; i < cl; i++) {
    const row = nums[i];
    for (let j = 0; j < rl; j++) {
      const sum = i * rl + j;
      const ci = (sum / c) | 0;
      const ri = sum % c;
      result[ci][ri] = row[j];
    }
  }
  return result;
}
