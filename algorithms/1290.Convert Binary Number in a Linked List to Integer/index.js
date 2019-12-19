'use strict';

module.exports = { getDecimalValue };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
  let bit = 0;
  while (head) {
    bit <<= 1;
    bit |= head.val;
    head = head.next;
  }
  return bit;
}
