'use strict';

/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.nums = nums.sort((n1, n2) => n2 - n1);
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    const { nums, k } = this;
    const cur = nums[k - 1];
    if (val <= cur) {
      return cur;
    }
    let i = k;
    while (i--) {
      if (nums[i] > val) {
        break;
      }
      nums[i + 1] = nums[i];
    }
    nums[++i] = val;
    return nums[k - 1];
  }
}

module.exports = { KthLargest };

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
