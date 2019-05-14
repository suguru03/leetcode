'use strict';

module.exports = { intersection, intersection2 };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const map = {};
  let l = nums1.length;
  while (l--) {
    map[nums1[l]] = true;
  }
  const result = [];
  l = nums2.length;
  while (l--) {
    const n = nums2[l];
    if (map[n]) {
      delete map[n];
      result.push(n);
    }
  }
  return result;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection2(nums1, nums2) {
  const set = new Set(nums1);
  const result = new Set();
  for (const n of nums2) {
    if (set.has(n)) {
      result.add(n);
    }
  }
  return Array.from(result);
}
