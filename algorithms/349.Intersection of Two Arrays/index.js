'use strict';

module.exports = { intersection, intersection2, intersection3, intersection4 };

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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection3(nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const res = [];
  for (const n of s2) {
    if (s1.has(n)) {
      res.push(n);
    }
  }
  return res;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection4(nums1, nums2) {
  nums1.sort((n1, n2) => n1 - n2);
  nums2.sort((n1, n2) => n1 - n2);
  let i = 0;
  let j = 0;
  const res = new Set();
  while (i < nums1.length && j < nums2.length) {
    const n1 = nums1[i];
    const n2 = nums2[j];
    if (n1 === n2) {
      res.add(n1);
      i++;
      j++;
      continue;
    }
    if (n1 < n2) {
      i++;
    } else {
      j++;
    }
  }
  return Array.from(res);
}
