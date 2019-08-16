'use strict';

module.exports = { threeSumClosest };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
  nums.sort((n1, n2) => n1 - n2);
  const size = nums.length;
  let result = Infinity;
  for (let l = 0; l < size - 2; l++) {
    const n1 = nums[l];
    let m = l + 1;
    let r = size - 1;
    while (m < r) {
      const n2 = nums[m];
      const n3 = nums[r];
      const sum = n1 + n2 + n3;
      const diff = Math.abs(sum - target);
      if (diff === 0) {
        return sum;
      }
      if (sum > target) {
        r--;
      } else {
        m++;
      }
      if (diff < Math.abs(result - target)) {
        result = sum;
      }
    }
  }
  return result;
}
