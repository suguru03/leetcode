'use strict';

module.exports = { isValidBST, isValidBST2 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/** * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  let cur;
  return dfs(root);

  function dfs(node) {
    if (!node) {
      return true;
    }
    const { val, left, right } = node;
    if (!dfs(right) || cur <= val) {
      return false;
    }
    cur = val;
    return dfs(left);
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST2(root, cur = { val: undefined }) {
  if (!root) {
    return true;
  }
  const { val, left, right } = root;
  if (!isValidBST2(right, cur) || cur.val <= val) {
    return false;
  }
  cur.val = val;
  return isValidBST2(left, cur);
}
