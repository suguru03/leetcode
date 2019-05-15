'use strict';

module.exports = { minDepth, minDepth2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
  return root ? dfs(root, 1) : 0;

  function dfs(node, depth) {
    if (!node) {
      return Infinity;
    }
    const { left, right } = node;
    if (!left && !right) {
      return depth;
    }
    return Math.min(dfs(left, ++depth), dfs(right, depth));
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth2(root) {
  if (!root) {
    return 0;
  }
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  return (left && right ? Math.min(left, right) : left + right) + 1;
}
