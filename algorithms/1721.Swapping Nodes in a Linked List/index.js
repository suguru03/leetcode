'use strict';

module.exports = { swapNodes };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNodes(head, k) {
  let node = head;
  let left = null;
  let right = null;
  while (node) {
    right = right?.next;
    if (--k === 0) {
      left = node;
      right = head;
    }
    node = node.next;
  }
  [left.val, right.val] = [right.val, left.val];
  return head;
}
