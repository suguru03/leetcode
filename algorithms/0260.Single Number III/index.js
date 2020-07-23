'use strict';

module.exports = { singleNumber };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function singleNumber(nums) {
  let bit = 0;
  for (const num of nums) {
    bit ^= num;
  }
  bit &= -bit;

  let num1 = 0;
  let num2 = 0;
  for (const num of nums) {
    if ((num & bit) === 0) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }
  return [num1, num2];
}
