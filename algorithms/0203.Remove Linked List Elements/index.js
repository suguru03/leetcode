'use strict';

module.exports = { removeElements, removeElements2, removeElements3 };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  const result = new ListNode();
  let prev = result;
  while (head) {
    if (head.val === val) {
      prev.next = head.next;
    } else {
      [prev.next, prev] = [head, head];
    }
    head = head.next;
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
 * @param {number} val
 * @return {ListNode}
 */
function removeElements2(head, val) {
  if (!head) {
    return null;
  }
  head.next = removeElements2(head.next, val);
  return head.val === val ? head.next : head;
}
