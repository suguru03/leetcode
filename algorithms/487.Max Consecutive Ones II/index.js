'use strict';

module.exports = { findMaxConsecutiveOnes, findMaxConsecutiveOnes2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
  const l = nums.length;
  let i = -1;
  let current;
  const temp = [];
  while (++i < l) {
    const n = nums[i];
    if (n === current) {
      temp[temp.length - 1]++;
    } else {
      current = n === 1 ? 1 : undefined;
      temp.push(n);
    }
  }
  // find 0
  let j = -1;
  let max = Math.max.apply(null, temp);
  const tl = temp.length;
  while (++j < tl) {
    const n = temp[j];
    if (n === 0) {
      const prev = temp[j - 1] || 0;
      const next = temp[j + 1] || 0;
      max = Math.max(max, prev + next + 1);
    }
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes2(nums) {
  let max = 0;
  let sum0 = 0;
  let sum1 = 0;
  let l = nums.length;
  while (l--) {
    sum0++;
    sum1++;
    if (nums[l] === 0) {
      sum1 = sum0;
      sum0 = 0;
    }
    max = Math.max(max, sum1);
  }
  return max;
}
