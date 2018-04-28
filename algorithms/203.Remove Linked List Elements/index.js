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
  let root = null;
  let h;
  while (head) {
    if (head.val === val) {
      head = head.next;
      continue;
    }
    if (!root) {
      root = head;
    } else {
      h.next = head;
    }
    h = head;
    head = head.next;
    h.next = null;
  }
  return root;
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

function removeElements3(head, val) {
  let node = new ListNode();
  const result = node;
  while (head) {
    if (head.val !== val) {
      node = node.next = head;
    } else {
      node.next = head.next;
    }
    head = head.next;
  }
  return result.next;
}
