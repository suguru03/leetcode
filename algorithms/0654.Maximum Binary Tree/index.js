'use strict';

const { TreeNode } = require('../util');

module.exports = { constructMaximumBinaryTree };

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
function constructMaximumBinaryTree(nums) {
  const l = nums.length;
  if (!l) {
    return null;
  }
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < l; i++) {
    const n = nums[i];
    if (n > max) {
      max = n;
      maxIndex = i;
    }
  }
  const node = new TreeNode(max);
  node.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  node.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return node;
}
