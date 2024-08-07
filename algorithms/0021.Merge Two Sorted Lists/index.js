'use strict';

module.exports = { mergeTwoLists, mergeTwoLists2 };

const { ListNode } = require('../util');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  const head = new ListNode(0);
  let node = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }
  node.next = l1 !== null ? l1 : l2;
  return head.next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists2(l1, l2) {
  const head = new ListNode();
  let node = head;
  while (l1 || l2) {
    if (l1?.val < (l2?.val ?? Infinity)) {
      [node.next, l1] = [l1, l1.next];
    } else {
      [node.next, l2] = [l2, l2.next];
    }
    node = node.next;
  }
  return head.next;
}
