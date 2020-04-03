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
  const vn = node.val;
  const vp = p.val;
  const vq = q.val;
  if (vn > Math.max(vp, vq)) {
    return lowestCommonAncestor(node.left, p, q);
  }
  if (vn < Math.min(vp, vq)) {
    return lowestCommonAncestor(node.right, p, q);
  }
  return node;
}
