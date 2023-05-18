'use strict';

module.exports = { swapPairs, swapPairs2 };

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
function swapPairs2(head) {
  let left = head?.next;
  let right = head;
  const result = left ?? right;
  while (left != null && right != null) {
    [left.next, right.next, left, right] = [right, left.next?.next ?? left.next, left.next?.next ?? null, left.next];
  }
  return result;
}
