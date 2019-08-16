'use strict';

module.exports = { middleNode };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val
 *   this.next = null
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
