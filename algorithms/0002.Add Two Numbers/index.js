'use strict';

module.exports = addTwoNumbers;

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
 * @return {number[]}
 */
function addTwoNumbers(l1, l2) {
  const result = [];
  let next = 0;
  while (l1 || l2) {
    let v1 = 0;
    let v2 = 0;
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    }
    const v = next + v1 + v2;
    next = (v / 10) | 0;
    result[result.length] = v % 10;
  }
  if (next !== 0) {
    result[result.length] = next % 10;
  }
  return result;
}
