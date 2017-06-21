/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {

  final int MAX = Integer.MAX_VALUE;

  public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode result = new ListNode(0);
    ListNode l = result;
    while (l1 != null && l2 != null) {
      int v1 = l1.val;
      int v2 = l2.val;
      if (v1 < v2) {
        l.next = l1;
        l1 = l1.next;
      } else {
        l.next = l2;
        l2 = l2.next;
      }
      l = l.next;
    }
    l.next = l1 != null ? l1 : l2;
    return result.next;
  }
}
