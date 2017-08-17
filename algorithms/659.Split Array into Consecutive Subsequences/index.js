'use strict';

module.exports = { isPossible };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isPossible(nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const prev = hash[n - 1];
    const array = hash[n] = hash[n] || [];
    if (!prev || !prev.length) {
      array.push(1);
      continue;
    }
    const val = prev.pop() + 1;
    let l = array.length;
    while (--l >= 0 && array[l] < val) {}
    if (l <= 0) {
      array.unshift(val);
    } else {
      array.splice(l, 0, val);
    }
  }
  return Object.entries(hash).every(([, array]) => !array.length || array.pop() >= 3);
}
