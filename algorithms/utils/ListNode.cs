using System.Collections.Generic;

public class ListNode
{
    public int val;
    public ListNode next;

    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }

    public static ListNode Create(int[] nums)
    {
        if (nums.Length == 0)
        {
            return null;
        }

        var head = new ListNode();
        var node = head;
        foreach (var num in nums)
        {
            node.next = new ListNode();
            node = node.next;
            node.val = num;
        }

        return head.next;
    }

    public int[] ToArray()
    {
        var arr = new List<int>();
        var node = this;
        while (node != null)
        {
            arr.Add(node.val);
            node = node.next;
        }

        return arr.ToArray();
    }
}
