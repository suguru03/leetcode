'use strict';

module.exports = { deleteDuplicates };

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
function deleteDuplicates(head) {
  if (!head) {
    return head;
  }
  const result = head;
  let prev = head;
  while (head.next) {
    head = head.next;
    if (prev.val === head.val) {
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
  }
  return result;
}
