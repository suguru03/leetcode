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

function sortedArrayToBST2(nums) {
  return dfs(0, nums.length);

  function dfs(start, end) {
    if (start === end) {
      return null;
    }
    const m = ((end + start) / 2) | 0;
    const node = new TreeNode(nums[m]);
    node.left = dfs(start, m);
    node.right = dfs(m + 1, end);
    return node;
  }
}
