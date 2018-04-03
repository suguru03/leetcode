'use strict';

module.exports = { averageOfLevels };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function averageOfLevels(root) {
  const levels = [];
  dfs(root, 0);
  return levels.map(({ sum, count }) => sum / count);

  function dfs(node, level) {
    if (!node) {
      return;
    }
    levels[level] = levels[level] || { sum: 0, count: 0 };
    levels[level].count++;
    levels[level++].sum += node.val;
    dfs(node.left, level);
    dfs(node.right, level);
  }
}
