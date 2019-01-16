'use strict';

module.exports = { hasCycle, hasCycle2 };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const map = new Map();

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  if (!head) {
    return false;
  }
  if (map.has(head)) {
    return true;
  }
  map.set(head, true);
  return hasCycle(head.next);
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle2(head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}
