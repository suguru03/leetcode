'use strict';

module.exports = { intersect, intersect2 };

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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect2(nums1, nums2) {
  nums1.sort((n1, n2) => n1 - n2);
  let l = 0;
  return nums2
    .sort((n1, n2) => n1 - n2)
    .filter((n) => {
      let r = nums1.length;
      while (l < r) {
        const m = (l + (r - l) / 2) | 0;
        if (nums1[m] < n) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      if (nums1[l] !== n) {
        return false;
      }
      l++;
      return true;
    });
}
