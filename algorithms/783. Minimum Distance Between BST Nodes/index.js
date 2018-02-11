'use strict';

module.exports = { minDiffInBST };

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
function minDiffInBST(root) {
  const map = {};
  resolve(root);
  const keys = Object.keys(map).sort((n1, n2) => n1 - n2);
  let prev = -Infinity;
  let min = Infinity;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    min = Math.min(min, Math.abs(key - prev));
    prev = key;
  }
  return min;

  function resolve(node) {
    if (!node) {
      return;
    }
    const { val, right, left } = node;
    map[val] = ++map[val] || 1;
    resolve(right);
    resolve(left);
  }
}
