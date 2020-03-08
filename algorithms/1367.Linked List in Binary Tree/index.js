'use strict';

module.exports = { isSubPath };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSubPath(head, root) {
  if (!head) {
    return true;
  }
  if (!root) {
    return false;
  }
  const { left, right } = root;
  return dfs(head, root) || isSubPath(head, left) || isSubPath(head, right);

  function dfs(head, node) {
    if (!head) {
      return true;
    }
    if (!node) {
      return false;
    }
    const { val: hval, next } = head;
    const { val, left, right } = node;
    return hval === val && (dfs(next, left) || dfs(next, right));
  }
}
