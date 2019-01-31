'use strict';

module.exports = { levelOrder, levelOrder2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  const result = [];
  if (!root) {
    return result;
  }
  let depth = 0;
  let queue = [root];
  while (queue.length) {
    const res = (result[depth++] = []);
    const next = [];
    for (const { val, left, right } of queue) {
      res.push(val);
      left && next.push(left);
      right && next.push(right);
    }
    queue = next;
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
    result[depth] = result[depth] || [];
    result[depth++].push(val);
    dfs(left, depth);
    dfs(right, depth);
  }
}
