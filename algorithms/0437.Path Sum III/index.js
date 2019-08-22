'use strict';

module.exports = { pathSum, pathSum2, pathSum3 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} node
 * @param {number} sum
 * @return {number}
 */
function pathSum(node, sum, root = true, cur = 0) {
  if (!node) {
    return 0;
  }
  const { val, right, left } = node;
  cur += val;
  let total = cur === sum ? 1 : 0;
  total += pathSum(right, sum, false, cur) + pathSum(left, sum, false, cur);
  if (root) {
    total += pathSum(right, sum) + pathSum(left, sum);
  }
  return total;
}

/**
 * @param {TreeNode} node
 * @param {number} sum
 * @return {number}
 */
function pathSum2(node, sum, cur = 0, cache = { 0: 1 }) {
  if (!node) {
    return 0;
  }
  const { val, right, left } = node;
  cur += val;
  const old = cur - sum;
  let total = cache[old] || 0;
  cache[cur] = ++cache[cur] || 1;
  total += pathSum2(right, sum, cur, cache) + pathSum2(left, sum, cur, cache);
  cache[cur]--;
  return total;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
function pathSum3(root, sum) {
  const set = new Set();
  let count = 0;
  dfs(root, 0);
  return count;
  function dfs(node, cur) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    cur += val;
    if (cur === sum) {
      count++;
    }
    dfs(left, cur);
    dfs(right, cur);
    if (set.has(node)) {
      return;
    }
    set.add(node);
    dfs(left, 0);
    dfs(right, 0);
  }
}
