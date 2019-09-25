'use strict';

module.exports = { detectCycle };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
  if (!head || !head.next) {
    return null;
  }
  let slow = head;
  let fast = head;
  do {
    slow = slow.next;
    fast = fast.next.next;
  } while (fast && fast.next && slow !== fast);
  if (slow !== fast) {
    return null;
  }
  while (head !== slow) {
    slow = slow.next;
    head = head.next;
  }
  return head;
}
