'use strict';

module.exports = { reverseList, reverseList2 };

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
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const node = current.next;
    current.next = prev;
    prev = current;
    current = node;
  }
  return prev;
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
function reverseList2(head) {
  if (!head) {
    return head;
  }
  const array = [];
  while (head) {
    array.push(head);
    head = head.next;
  }
  const root = array.pop();
  head = root;
  for (let i = array.length - 1; i >= 0; i--) {
    head.next = array[i];
    head = head.next;
  }
  head.next = null;
  return root;
}
