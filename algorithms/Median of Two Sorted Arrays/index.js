'use strict';

module.exports = { findMedianSortedArrays, findMedianSortedArrays2 };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {

  let l1 = nums1.length;
  let l2 = nums2.length;
  let l = l1 + l2;
  if (l === 0) {
    return 0;
  }
  const m = l / 2;
  const odd = l % 2;
  const mi = m | 0;
  const result = [];
  while (m <= l--) {
    const n1 = nums1[l1 - 1];
    const n2 = nums2[l2 - 1];
    if (n2 === undefined || n2 < n1) {
      l1--;
      if (l <= mi) {
        result.push(n1);
      }
    } else {
      l2--;
      if (l <= mi) {
        result.push(n2);
      }
    }
  }
  return odd ? result[0] : (result[0] + result[1]) / 2;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays2(nums1, nums2) {

  const nums = nums1.concat(nums2);
  const l = nums.length;
  const m = l / 2;
  nums.sort();
  if (l === 0) {
    return nums;
  }
  if (l % 2) {
    return nums[m | 0];
  }
  return (nums[m] + nums[m - 1]) / 2;
}
