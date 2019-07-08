'use strict';

module.exports = { delNodes };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
function delNodes(root, to_delete) {
  const set = new Set(to_delete);
  const result = [];
  dfs(root, true);
  return result;

  function dfs(node, root) {
    if (!node) {
      return null;
    }
    const { val, left, right } = node;
    const deleted = set.has(val);
    if (root && !deleted) {
      result.push(node);
    }
    node.left = dfs(left, deleted);
    node.right = dfs(right, deleted);
    return deleted ? null : node;
  }
}
