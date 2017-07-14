'use strict';

module.exports = { sortedArrayToBST };

class TreeNode {

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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
  const index = (l - 1) / 2 | 0;
  const node = new TreeNode(nums[index]);
  node.left = sortedArrayToBST(nums.slice(0, index));
  node.right = sortedArrayToBST(nums.slice(index + 1));
  return node;
}
