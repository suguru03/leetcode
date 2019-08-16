'use strict';

module.exports = { subsets, subsets2 };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const result = [];
  dfs(0, []);
  return result;

  function dfs(index, cur) {
    result.push(cur);
    for (let i = index; i < nums.length; i++) {
      dfs(i + 1, [...cur, nums[i]]);
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets2(nums) {
  const result = [[]];
  for (const n of nums) {
    const size = result.length;
    for (let j = 0; j < size; j++) {
      result.push([...result[j], n]);
    }
  }
  return result;
}
