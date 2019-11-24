'use strict';

module.exports = { sumNumbers, sumNumbers2 };

/** * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers(root) {
  const list = dfs(root);
  let sum = 0;
  for (const arr of list) {
    for (const [index, num] of arr.entries()) {
      sum += num * Math.pow(10, arr.length - index - 1);
    }
  }
  return sum;
  function dfs(node) {
    if (!node) {
      return [];
    }
    const { val, left, right } = node;
    return left || right ? [...dfs(left), ...dfs(right)].map(arr => [val, ...arr]) : [[val]];
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers2(root) {
  return dfs(root, 0);
  function dfs(node, prev) {
    if (!node) {
      return 0;
    }
    const { val, left, right } = node;
    const sum = prev * 10 + val;
    return left || right ? dfs(left, sum) + dfs(right, sum) : sum;
  }
}
