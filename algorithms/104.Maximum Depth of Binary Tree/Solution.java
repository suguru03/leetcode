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
    return this.getDepth(root);
  }

  private int getDepth(TreeNode node) {
    return node == null ? 0 : 1 + Math.max(this.getDepth(node.left), this.getDepth(node.righ));
  }
}
