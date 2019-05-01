'use strict';

module.exports = { twoSum, twoSum2 };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let l = nums.length;
  const hash = [];
  while (l--) {
    const n = nums[l];
    const diff = target - n;
    const i = hash[diff];
    if (i !== undefined) {
      return [l, i];
    }
    hash[n] = l;
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum2(nums, target) {
  const hash = new Map();
  for (const [i, n] of nums.entries()) {
    const diff = target - n;
    if (hash.has(diff)) {
      return [hash.get(diff), i];
    }
    hash.set(n, i);
  }
}
