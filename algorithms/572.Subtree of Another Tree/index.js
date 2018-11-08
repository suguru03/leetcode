'use strict';

module.exports = { isSubtree };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isSubtree(s, t) {
  if (!s) {
    return false;
  }
  return check(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
}

function check(s, t) {
  if (!s || !t) {
    return s === t;
  }
  return s.val === t.val && check(s.right, t.right) && check(s.left, t.left);
}
