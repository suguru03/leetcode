'use strict';

class NumArray {

  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    for (let i = 1; i < nums.length; i++) {
      nums[i] += nums[i - 1];
    }
    this.nums = nums;
  }

  /**
   * @param {number} i
   * @param {number} j
   * @return {number}
   */
  sumRange(i, j) {
    return this.nums[j] - (i ? this.nums[i - 1] : 0);
  }
}

module.exports = { NumArray };
