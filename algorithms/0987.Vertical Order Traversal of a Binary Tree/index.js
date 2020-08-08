'use strict';

module.exports = { verticalTraversal };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function verticalTraversal(root) {
  const map = new Map();
  dfs(root, 0, 0);
  return Array.from(map)
    .sort(([x1], [x2]) => x1 - x2)
    .map(([, values]) => values.sort((v1, v2) => v2.y - v1.y || v1.val - v2.val).map(v => v.val));

  function dfs(node, x, y) {
    if (!node) {
      return;
    }
    dfs(node.left, x - 1, y - 1);
    map.set(x, map.get(x) || []);
    map.get(x).push({ val: node.val, y });
    dfs(node.right, x + 1, y - 1);
  }
}
