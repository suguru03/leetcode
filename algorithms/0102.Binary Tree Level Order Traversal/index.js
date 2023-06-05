'use strict';

module.exports = { levelOrder, levelOrder2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  const result = [];
  let queue = [root];
  while (queue.length !== 0) {
    const row = [];
    const next = [];
    for (const node of queue) {
      if (!node) {
        continue;
      }
      row.push(node.val);
      next.push(node.left, node.right);
    }
    queue = next;
    if (row.length !== 0) {
      result.push(row);
    }
  }
  return result;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder2(root) {
  const result = [];
  dfs(root, 0);
  return result;
  function dfs(node, depth) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    result[depth] ||= [];
    result[depth++].push(val);
    dfs(left, depth);
    dfs(right, depth);
  }
}
