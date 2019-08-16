'use strict';

module.exports = { merge };

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let l = m + n;
  let i = m - 1;
  let j = n - 1;
  while (i >= 0 || j >= 0) {
    const n1 = i >= 0 ? nums1[i] : -Infinity;
    const n2 = j >= 0 ? nums2[j] : -Infinity;
    if (n1 > n2) {
      nums1[--l] = n1;
      i--;
    } else {
      nums1[--l] = n2;
      j--;
    }
  }
}
