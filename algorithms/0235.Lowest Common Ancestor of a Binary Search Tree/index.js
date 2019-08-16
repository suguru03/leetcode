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
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  if (!root) {
    return null;
  }
  const vr = root.val;
  const vp = p.val;
  const vq = q.val;
  if (vr > Math.max(vp, vq)) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (vr < Math.min(vp, vq)) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
}
