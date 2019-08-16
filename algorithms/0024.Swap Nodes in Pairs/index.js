'use strict';

module.exports = { swapPairs };

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
function swapPairs(head) {
  let prev = { next: null };
  const result = prev;
  while (head && head.next) {
    const _head = head.next;
    const _next = head;
    head = _head.next;
    _head.next = _next;
    prev.next = _head;
    prev = _next;
  }
  if (head) {
    prev.next = head;
  } else {
    prev.next = null;
  }
  return result.next;
}
