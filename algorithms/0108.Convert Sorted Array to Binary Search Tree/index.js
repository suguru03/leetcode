'use strict';

const { TreeNode } = require('../utils');

module.exports = { sortedArrayToBST, sortedArrayToBST2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  let l = nums.length;
  if (!l) {
    return null;
  }
  const index = ((l - 1) / 2) | 0;
  const node = new TreeNode(nums[index]);
  node.left = sortedArrayToBST(nums.slice(0, index));
  node.right = sortedArrayToBST(nums.slice(index + 1));
  return node;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST2(nums) {
  return dfs(0, nums.length);
  function dfs(left, right) {
    if (left >= right) {
      return null;
    }

    const mid = (left + (right - left) / 2) | 0;
    const node = new TreeNode(nums[mid]);
    node.left = dfs(left, mid);
    node.right = dfs(mid + 1, right);
    return node;
  }
}
