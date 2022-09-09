using System;
using System.Collections.Generic;

namespace MaximumDepthOfBinaryTree
{
    public class Solution
    {
        public int MaxDepth(TreeNode root)
        {
            if (root == null)
            {
                return 0;
            }

            return Math.Max(MaxDepth(root.left), MaxDepth(root.right)) + 1;
        }

        public int MaxDepth1(TreeNode root)
        {
            var max = 0;
            var queue = new Queue<TreeNode>();
            queue.Enqueue(root);
            while (queue.Count != 0)
            {
                max++;
                var count = queue.Count;
                while (count-- != 0)
                {
                    var node = queue.Dequeue();
                    if (node == null)
                    {
                        continue;
                    }

                    queue.Enqueue(node.left);
                    queue.Enqueue(node.right);
                }
            }

            return --max;
        }
    }
}
