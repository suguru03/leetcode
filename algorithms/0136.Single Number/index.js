'use strict';

module.exports = { singleNumber, singleNumber2 };

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  nums.sort((n1, n2) => n1 - n2);
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n !== nums[i - 1] && n !== nums[i + 1]) {
      return n;
    }
  }
}

function singleNumber2(nums) {
  let bit = 0;
  for (const n of nums) {
    bit ^= n;
  }
  return bit;
}
