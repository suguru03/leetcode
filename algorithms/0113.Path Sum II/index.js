'use strict';

module.exports = { pathSum };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
function pathSum(root, targetSum) {
  const result = [];
  dfs(root, targetSum, []);
  return result;

  function dfs(node, sum, current) {
    if (!node) {
      return;
    }
    sum -= node.val;
    current.push(node.val);
    if (node.left !== node.right) {
      dfs(node.left, sum, current);
      dfs(node.right, sum, current);
    } else if (sum === 0) {
      result.push([...current]);
    }
    current.pop();
  }
}
