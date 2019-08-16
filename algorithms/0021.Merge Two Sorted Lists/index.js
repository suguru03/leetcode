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
  let h = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      h.next = l1;
      l1 = l1.next;
    } else {
      h.next = l2;
      l2 = l2.next;
    }
    h = h.next;
  }
  h.next = l1 ? l1 : l2;
  return head.next;
}
