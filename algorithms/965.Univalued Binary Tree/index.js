'use strict';

module.exports = { isUnivalTree };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isUnivalTree(root, value = root && root.val) {
  if (!root) {
    return true;
  }
  const { val, left, right } = root;
  return val === value && isUnivalTree(left, val) && isUnivalTree(right, val);
}
