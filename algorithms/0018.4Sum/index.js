'use strict';

module.exports = { fourSum };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  const set = new Set();
  const result = [];
  nums.sort((n1, n2) => n1 - n2);
  const size = nums.length;
  for (let l = 0; l < size - 3; l++) {
    const n1 = nums[l];
    for (let r = size - 1; r >= l + 2; r--) {
      const n4 = nums[r];
      let ml = l + 1;
      let mr = r - 1;
      while (ml < mr) {
        const n2 = nums[ml];
        const n3 = nums[mr];
        const sum = n1 + n2 + n3 + n4;
        if (sum === target) {
          const arr = [n1, n2, n3, n4];
          const key = arr.join(',');
          if (!set.has(key)) {
            result.push(arr);
            set.add(key);
          }
        }
        if (sum < target) {
          ml++;
        } else {
          mr--;
        }
      }
    }
  }
  return result;
}
