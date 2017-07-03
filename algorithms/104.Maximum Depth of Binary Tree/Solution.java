/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
  public int maxDepth(TreeNode root) {
    return root == null ? 0 : 1 + Math.max(this.getDepth(root.left), this.getDepth(root.righ));
  }
}
