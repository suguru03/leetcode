'use strict';

module.exports = { distanceK };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
function distanceK(root, target, k) {
  const result = [];
  dfs(root, -1);
  return result;

  function dfs(node, distance) {
    if (!node) {
      return -1;
    }
    const next = node.val === target.val ? k : distance - 1;
    if (next === 0) {
      result.push(node.val);
    }
    const dl = dfs(node.left, next) - 1;
    const dr = dfs(node.right, next) - 1;
    if (dl === 0 || dr === 0) {
      result.push(node.val);
    } else if (dl > 0) {
      dfs(node.right, dl);
    } else if (dr > 0) {
      dfs(node.left, dr);
    }
    return node.val === target.val ? k : Math.max(dl, dr);
  }
}
