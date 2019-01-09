'use strict';

module.exports = { threeSum };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const size = nums.length;
  const result = [];
  let l = 0;
  while (l < size) {
    const n1 = nums[l];
    let m = l + 1;
    let r = size - 1;
    while (m < r) {
      const n2 = nums[m];
      const n3 = nums[r];
      const sum = n1 + n2 + n3;
      if (sum < 0) {
        m++;
        continue;
      }
      if (sum > 0) {
        r--;
        continue;
      }
      result.push([n1, n2, n3]);
      while (n2 === nums[m]) {
        m++;
      }
      while (n3 === nums[r]) {
        r--;
      }
    }
    while (n1 === nums[l]) {
      l++;
    }
  }
  return result;
}
