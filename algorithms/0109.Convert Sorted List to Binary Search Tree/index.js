'use strict';

const { TreeNode } = require('../utils');

module.exports = { sortedListToBST };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
  return dfs(0, count(head) - 1);

  function dfs(start, end) {
    if (start > end) {
      return null;
    }
    const mid = (start + (end - start) / 2) | 0;
    const node = new TreeNode(0);
    node.left = dfs(start, mid - 1);
    [node.val, head] = [head.val, head.next];
    node.right = dfs(mid + 1, end);
    return node;
  }
}

function count(node) {
  let size = 0;
  while (node) {
    size++;
    node = node.next;
  }
  return size;
}
