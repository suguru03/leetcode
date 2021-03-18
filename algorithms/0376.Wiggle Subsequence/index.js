'use strict';

module.exports = { wiggleMaxLength };

/**
 * @param {number[]} nums
 * @return {number}
 */
function wiggleMaxLength(nums) {
  let max = 1;
  let [prev] = nums;
  let asc = null;
  for (const n of nums.slice(1)) {
    const diff = n - prev;
    if (diff > 0) {
      if (asc !== true) {
        max++;
      }
      asc = true;
      prev = Math.max(prev, n);
    }
    if (diff < 0) {
      if (asc !== false) {
        max++;
      }
      asc = false;
      prev = Math.min(prev, n);
    }
  }
  return max;
}
