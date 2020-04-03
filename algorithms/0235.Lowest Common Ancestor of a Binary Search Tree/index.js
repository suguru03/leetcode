'use strict';

module.exports = { lowestCommonAncestor };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode}node
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(node, p, q) {
  if (!node) {
    return null;
  }
  if (node.val > Math.max(p.val, q.val)) {
    return lowestCommonAncestor(node.left, p, q);
  }
  if (node.val < Math.min(p.val, q.val)) {
    return lowestCommonAncestor(node.right, p, q);
  }
  return node;
}
