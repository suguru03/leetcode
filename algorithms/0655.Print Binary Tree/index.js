'use strict';

module.exports = { printTree };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
function printTree(root) {
  const height = getHeight(root);
  const width = Math.pow(2, height) - 1;
  const result = Array(height);
  for (let i = 0; i < height; i++) {
    result[i] = Array(width).fill('');
  }
  const rootc = (width / 2) | 0;
  fill(root, rootc, 0);
  return result;

  function fill(node, c, level) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    result[level][c] = val + '';
    const diff = ((rootc + 1) / Math.pow(2, ++level)) | 0;
    fill(left, c - diff, level);
    fill(right, c + diff, level);
  }
}

function getHeight(root) {
  return !root ? 0 : 1 + Math.max(getHeight(root.left), getHeight(root.right));
}
