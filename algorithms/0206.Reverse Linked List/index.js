'use strict';

module.exports = { reverseList, reverseList2, reverseList3 };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null;
  while (head) {
    [head.next, prev, head] = [prev, head, head.next];
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
function reverseList3(head) {
  if (!head) {
    return null;
  }
  const result = { next: null };
  loop(head);
  head.next = null;
  return result.next;

  function loop(node) {
    if (!node) {
      return result;
    }
    const head = loop(node.next);
    head.next = node;
    return node;
  }
}
