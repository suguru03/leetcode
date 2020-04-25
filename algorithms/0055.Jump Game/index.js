'use strict';

module.exports = { canJump, canJump2 };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let max = 0;
  for (const [index, num] of nums.entries()) {
    if (index > max) {
      return false;
    }
    max = Math.max(max, index + num);
  }
  return true;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump2(nums) {
  let max = 0;
  let can = false;
  return nums.every((num, index) => {
    [can, max] = [index <= max, Math.max(max, index + num)];
    return can;
  });
}
