'use strict';

module.exports = { isCompleteTree };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isCompleteTree(root) {
  const depth = getDepth(root);
  let nodes = [root];
  for (let d = 0; d < depth; d++) {
    const next = [];
    let foundNull = false;
    for (const node of nodes) {
      if (!node) {
        if (d !== depth - 1) {
          return false;
        }
        foundNull = true;
        continue;
      }
      if (foundNull) {
        return false;
      }
      next.push(node.left, node.right);
    }
    nodes = next;
  }
  return true;
}

function getDepth(root) {
  return !root ? 0 : 1 + Math.max(getDepth(root.left), getDepth(root.right));
}
