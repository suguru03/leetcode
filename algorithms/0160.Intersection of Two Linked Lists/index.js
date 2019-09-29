'use strict';

module.exports = { getIntersectionNode, getIntersectionNode2, getIntersectionNode3 };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  const set = new Set();
  while (headA) {
    set.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (set.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode2(headA, headB) {
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode3(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let nodeA = headA;
  let nodeB = headB;
  let switched = 0;
  while (switched !== 15) {
    if (nodeA === nodeB) {
      return nodeA;
    }
    nodeA = nodeA.next || headB;
    nodeB = nodeB.next || headA;
    if (nodeA === headB) {
      switched |= switched & 1 ? 1 << 2 : 1;
    }
    if (nodeB === headA) {
      switched |= switched & 2 ? 2 << 2 : 2;
    }
  }
  return null;
}
