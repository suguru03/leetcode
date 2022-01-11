'use strict';

module.exports = { sumRootToLeaf };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} node
 * @return {number}
 */
function sumRootToLeaf(node, cur = 0) {
  if (!node) {
    return 0;
  }
  cur = (cur << 1) | node.val;
  return node.left === node.right ? cur : sumRootToLeaf(node.left, cur) + sumRootToLeaf(node.right, cur);
}
