'use strict';

module.exports = { isPalindrome };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  if (!head) {
    return true;
  }
  let h0 = head;
  let h1 = head;
  let h2 = head.next;
  let even = false;
  while (h1 && h2) {
    const next = h1.next;
    h1.next = h0;
    h0 = h1;
    h1 = next;
    if (h2.next) {
      h2 = h2.next.next;
    } else {
      h2 = h2.next;
      even = true;
    }
  }
  if (!even) {
    h1 = h1.next;
  }
  while (h1) {
    if (h0.val !== h1.val) {
      return false;
    }
    h0 = h0.next;
    h1 = h1.next;
  }
  return true;
}
