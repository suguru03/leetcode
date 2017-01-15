'use strict';

module.exports = { mergeTwoLists };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  const head = { next: null };
  let _head = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      _head.next = l1;
      _head = l1;
      l1 = l1.next;
    } else {
      _head.next = l2;
      _head = l2;
      l2 = l2.next;
    }
  }
  if (l1) {
    _head.next = l1;
  }
  if (l2) {
    _head.next = l2;
  }
  return head.next;
}
