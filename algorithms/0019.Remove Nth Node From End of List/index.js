'use strict';

module.exports = { removeNthFromEnd };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let size = 0;
  let prev = head;
  let candidate = head;
  let _head = head;
  while (_head) {
    _head = _head.next;
    if (size++ >= n) {
      prev = candidate;
      candidate = candidate.next;
    }
  }
  if (head === candidate) {
    return head.next;
  }
  prev.next = candidate.next;
  return head;
}
