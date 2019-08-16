'use strict';

module.exports = { findPairs, findPairs2 };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findPairs(nums, k) {
  nums.sort((n1, n2) => n1 - n2);
  let right = 0;
  let left = 1;
  const hash = {};
  const l = nums.length;
  while (left < l) {
    const nl = nums[left];
    const nr = nums[right];
    const diff = nl - nr;
    if (diff < k) {
      left++;
    } else if (diff === k) {
      hash[`${nl}:${nr}`] = 1;
      right++;
      left++;
    } else {
      right++;
    }
    if (right === left) {
      left++;
    }
  }
  return Object.keys(hash).length;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findPairs2(nums, k) {
  if (k < 0) {
    return 0;
  }
  const l = nums.length;
  const hash = {};
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    hash[n] = ++hash[n] || 1;
  }
  let result = 0;
  const answer = k === 0 ? 2 : 1;
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    const d = n - k;
    if (hash[d] >= answer) {
      result++;
      hash[d] = 0;
    }
  }
  return result;
}
