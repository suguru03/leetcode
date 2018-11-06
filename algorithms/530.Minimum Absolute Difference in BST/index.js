'use strict';

module.exports = { getMinimumDifference, getMinimumDifference2 };

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
function getMinimumDifference(root) {
  const arr = [];
  dfs(root);
  arr.sort((v1, v2) => v1 - v2);
  if (arr.length <= 1) {
    return 0;
  }
  let min = Infinity;
  for (let i = 1; i < arr.length; i++) {
    const n = arr[i] - arr[i - 1];
    min = Math.min(min, n);
  }
  return min;

  function dfs(node) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    arr.push(val);
    dfs(left);
    dfs(right);
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function getMinimumDifference2(root) {
  let min = Infinity;
  dfs(root, -Infinity);
  return min;

  function dfs(node, prev) {
    if (!node || min <= 1) {
      return prev;
    }
    const { val, left, right } = node;
    prev = dfs(left, prev);
    min = Math.min(min, val - prev);
    return dfs(right, val);
  }
}
