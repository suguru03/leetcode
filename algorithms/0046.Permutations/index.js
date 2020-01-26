'use strict';

module.exports = { permute, permute2, permute3, permute4 };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const result = [];
  dfs(new Set());
  return result;
  function dfs(set) {
    if (set.size === nums.length) {
      result.push(Array.from(set));
      return;
    }
    for (const num of nums) {
      if (set.has(num)) {
        continue;
      }
      set.add(num);
      dfs(set);
      set.delete(num);
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute2(nums) {
  const result = [];
  dfs(0, []);
  return result;
  function dfs(bit, arr) {
    if (arr.length === nums.length) {
      result.push([...arr]);
      return;
    }
    for (const [index, num] of nums.entries()) {
      if (bit & (1 << index)) {
        continue;
      }
      arr.push(num);
      dfs(bit | (1 << index), arr);
      arr.pop();
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute3(nums) {
  const numSet = new Set(nums);
  const result = [];
  dfs(new Set());
  return result;
  function dfs(set) {
    if (set.size === nums.length) {
      result.push(Array.from(set));
      return;
    }
    const read = new Set();
    for (const num of numSet) {
      if (read.has(num)) {
        break;
      }
      read.add(num);
      set.add(num);
      numSet.delete(num);
      dfs(set);
      set.delete(num);
      numSet.add(num);
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute4(nums) {
  const numSet = new Set(nums);
  const result = [];
  dfs([]);
  return result;
  function dfs(arr) {
    if (arr.length === nums.length) {
      result.push([...arr]);
      return;
    }
    const read = new Set();
    for (const num of numSet) {
      if (read.has(num)) {
        break;
      }
      read.add(num);
      arr.push(num);
      numSet.delete(num);
      dfs(arr);
      arr.pop();
      numSet.add(num);
    }
  }
}
