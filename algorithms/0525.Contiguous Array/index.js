'use strict';

module.exports = { findMaxLength };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
  const indexMap = new Map([[0, -1]]);
  let max = 0;
  let sum = 0;
  for (const [index, num] of nums.entries()) {
    sum += num === 0 ? -1 : 1;
    if (indexMap.has(sum)) {
      max = Math.max(max, index - indexMap.get(sum));
    } else {
      indexMap.set(sum, index);
    }
  }
  return max;
}
