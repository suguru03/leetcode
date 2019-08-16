'use strict';

module.exports = { pathSum, pathSum2 };

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
