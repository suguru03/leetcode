'use strict';

module.exports = { sumRootToLeaf, sumRootToLeaf2 };

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
function sumRootToLeaf(root) {
  let sum = 0;
  dfs(root, 0);
  return sum;
  function dfs(node, bit) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    bit <<= 1;
    bit |= val;
    if (!left && !right) {
      sum += bit;
      return;
    }
    dfs(left, bit);
    dfs(right, bit);
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
function sumRootToLeaf2(root) {
  return dfs(root, 0);
  function dfs(node, bit) {
    if (!node) {
      return 0;
    }
    const { val, left, right } = node;
    bit = bit * 2 + val;
    return left === right ? bit : dfs(left, bit) + dfs(right, bit);
  }
}
