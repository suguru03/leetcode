'use strict';

module.exports = { twoSum, twoSum2 };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const hash = new Map();
  for (const [i, n] of nums.entries()) {
    const diff = target - n;
    if (hash.has(diff)) {
      return [hash.get(diff), i];
    }
    hash.set(n, i);
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum2(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  const arr = nums.map((num, index) => ({ num, index })).sort((n1, n2) => n1.num - n2.num);
  while (left < right) {
    const l = arr[left];
    const r = arr[right];
    const sum = l.num + r.num;
    if (sum === target) {
      return [l.index, r.index];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
