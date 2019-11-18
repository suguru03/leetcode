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
    root.val = 0;
    this.set = new Set();
    this.dfs(root);
  }

  dfs({ val, left, right }) {
    this.set.add(val);
    if (left) {
      left.val = 2 * val + 1;
      this.dfs(left);
    }
    if (right) {
      right.val = 2 * val + 2;
      this.dfs(right);
    }
  }
  /**
   * @param {number} target
   * @return {boolean}
   */
  find(target) {
    return this.set.has(target);
  }
}
