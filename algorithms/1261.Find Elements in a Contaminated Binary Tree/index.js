/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
class FindElements {
  constructor(root) {
    this.set = new Set();
    root.val = 0;
    this.dfs(root);
  }

  dfs(node) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    this.set.add(val);
    if (left) {
      left.val = 2 * val + 1;
    }
    if (right) {
      right.val = 2 * val + 2;
    }
    this.dfs(left);
    this.dfs(right);
  }
  /**
   * @param {number} target
   * @return {boolean}
   */
  find(target) {
    return this.set.has(target);
  }
}
