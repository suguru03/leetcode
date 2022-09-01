namespace AddTwoNumbers
{
    /**
     * Definition for singly-linked list.
     * public class ListNode {
     *     public int val;
     *     public ListNode next;
     *     public ListNode(int val=0, ListNode next=null) {
     *         this.val = val;
     *         this.next = next;
     *     }
     * }
     */
    public class Solution
    {
        public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
        {
            var head = new ListNode();
            var cur = head;
            var nextVal = 0;
            while (l1 != null || l2 != null)
            {
                cur.next = new ListNode();
                cur = cur.next;
                cur.val += (l1?.val ?? 0) + (l2?.val ?? 0) + nextVal;
                nextVal = cur.val / 10;
                cur.val %= 10;
                l1 = l1?.next;
                l2 = l2?.next;
            }

            if (nextVal != 0)
            {
                cur.next = new ListNode { val = nextVal };
            }

            return head.next;
        }
    }
}
