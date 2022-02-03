'use strict';

module.exports = { fourSumCount };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
function fourSumCount(nums1, nums2, nums3, nums4) {
  let prev = new Map();
  for (const n of nums1) {
    prev.set(n, ~~prev.get(n) + 1);
  }
  for (const nums of [nums2, nums3, nums4]) {
    const next = new Map();
    for (const num of nums) {
      for (const [s, count] of prev) {
        const sum = num + s;
        next.set(sum, ~~next.get(sum) + count);
      }
    }
    prev = next;
  }
  return ~~prev.get(0);
}
