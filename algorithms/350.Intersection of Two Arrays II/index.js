'use strict';

module.exports = { intersect };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  const map = {};
  let l = nums1.length;
  while (l--) {
    const n = nums1[l];
    map[n] = ++map[n] || 1;
  }
  l = nums2.length;
  const result = [];
  while (l--) {
    const n = nums2[l];
    if (map[n]) {
      result.push(n);
      map[n]--;
    }
  }
  return result;
}
