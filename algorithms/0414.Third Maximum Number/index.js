'use strict';

module.exports = { thirdMax };

/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
  const l = 3;
  const result = Array(l).fill(-Infinity);
  first: for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    for (let j = 0; j < l; j++) {
      if (result[j] === n) {
        continue first;
      }
      if (result[j] < n) {
        n = swap(result, j, n);
      }
    }
  }
  return result[2] === -Infinity ? result[0] : result[2];
}

function swap(result, index, n) {
  const temp = result[index];
  result[index] = n;
  return temp;
}
