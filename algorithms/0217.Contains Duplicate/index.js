'use strict';

module.exports = { containsDuplicate, containsDuplicate2 };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) {
      return true;
    }
    set.add(n);
  }
  return false;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate2(nums) {
  return new Set(nums).size !== nums.length;
}
