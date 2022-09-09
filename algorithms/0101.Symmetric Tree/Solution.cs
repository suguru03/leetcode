using System.Collections;
using System.Collections.Generic;

namespace SymmetricTree
{
    public class Solution
    {
        public bool IsSymmetric1(TreeNode root)
        {
            return root == null || IsSymmetric(root.left, root.right);
        }

        private static bool IsSymmetric(TreeNode left, TreeNode right)
        {
            if (left == right)
            {
                return true;
            }

            if (left?.val != right?.val)
            {
                return false;
            }

            return IsSymmetric(left.left, right.right) && IsSymmetric(left.right, right.left);
        }

        public bool IsSymmetric(TreeNode root)
        {
            if (root == null)
            {
                return true;
            }

            var queue = new Queue<(TreeNode, TreeNode)>();
            queue.Enqueue((root.left, root.right));
            while (queue.Count != 0)
            {
                var (left, right) = queue.Dequeue();
                if (left == right)
                {
                    continue;
                }

                if (left?.val != right?.val)
                {
                    return false;
                }

                queue.Enqueue((left.left, right.right));
                queue.Enqueue((left.right, right.left));
            }

            return true;
        }
    }
}
