'use strict';

module.exports = { createTargetArray, createTargetArray2 };

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
function createTargetArray(nums, index) {
  const indices = Array(nums.length).fill(null);
  for (const [from, to] of index.entries()) {
    set(from, to);
  }
  return indices.map(index => nums[index]);

  function set(from, to) {
    if (from === null) {
      return;
    }
    set(indices[to], to + 1);
    indices[to] = from;
  }
}

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
function createTargetArray2(nums, index) {
  const result = [];
  for (const [i, num] of nums.entries()) {
    const j = index[i];
    result.splice(j, 0, num);
  }
  return result;
}
