'use strict';

module.exports = { numComponents, numComponents2 };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
function numComponents(head, G) {
  const g = {};
  G.forEach(n => (g[n] = true));

  let flag = false;
  let result = 0;
  check(head);
  return result;

  function check(node) {
    if (!node) {
      return;
    }
    if (g[node.val]) {
      if (!flag) {
        flag = true;
        result++;
      }
    } else {
      flag = false;
    }
    check(node.next);
  }
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
 * @param {number[]} G
 * @return {number}
 */
function numComponents2(head, G) {
  const g = {};
  G.forEach(n => (g[n] = true));

  let flag = 0;
  let result = 0;
  while (head) {
    if (g[head.val]) {
      if (!flag) {
        flag = true;
        result++;
      }
    } else {
      flag = false;
    }
    head = head.next;
  }
  return result;
}
