'use strict';

module.exports = { intersection };

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
