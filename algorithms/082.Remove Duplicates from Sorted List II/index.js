'use strict';

module.exports = { deleteDuplicates };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  const res = { next: null };
  let cur = res;
  while (head) {
    const node = head;
    const { val, next } = head;
    do {
      head = head.next;
    } while (head && head.val === val);
    if (head !== next) {
      continue;
    }
    cur.next = node;
    cur = node;
  }
  cur.next = null;
  return res.next;
}
