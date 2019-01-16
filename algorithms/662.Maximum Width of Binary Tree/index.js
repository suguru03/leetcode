'use strict';

module.exports = { widthOfBinaryTree };

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
function widthOfBinaryTree(root) {
  const depth = getDepth(root);
  const memo = Array(depth);
  fill(root, 0, 0);
  let max = 0;
  for (let i = 0; i < memo.length; i++) {
    const { left, right } = memo[i];
    max = Math.max(max, right - left + 1);
  }
  return max;

  function fill(node, d, i) {
    if (!node) {
      return;
    }
    const prev = memo[d - 1];
    if (prev) {
      i -= prev.left;
    }
    const info = (memo[d] = memo[d] || { left: i, right: i });
    info.left = Math.min(info.left, i);
    info.right = Math.max(info.right, i);
    fill(node.left, ++d, 2 * i);
    fill(node.right, d, 2 * i + 1);
  }
}

function getDepth(root) {
  return !root ? 0 : 1 + Math.max(getDepth(root.left), getDepth(root.right));
}
