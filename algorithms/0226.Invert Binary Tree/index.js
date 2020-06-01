'use strict';

module.exports = { invertTree };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */
function invertTree(node) {
  if (!node) {
    return null;
  }
  const { left, right } = node;
  node.right = invertTree(left);
  node.left = invertTree(right);
  return node;
}
