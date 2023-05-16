'use strict';

module.exports = { hasCycle, hasCycle2, hasCycle3, hasCycle4 };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }
  return false;
}

const set = new Set();
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle2(head) {
  if (!head) {
    return false;
  }
  if (set.has(head)) {
    return true;
  }
  set.add(head);
  return hasCycle(head.next);
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle3(head) {
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

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle4(head) {
  let slow = head;
  let fast = head?.next;
  while (fast != null && slow !== fast) {
    slow = slow.next;
    fast = fast.next?.next;
  }

  return slow === fast;
}
