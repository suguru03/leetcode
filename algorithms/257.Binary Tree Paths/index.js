'use strict';

module.exports = { binaryTreePaths };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
  const paths = [];
  if (!root) {
    return paths;
  }
  pathResolve(root, []);
  return paths;

  function pathResolve(node, path) {
    const { val, left, right } = node;
    if (!left && !right) {
      path.push(val);
      return paths.push(path.join('->'));
    }
    if (left) {
      pathResolve(left, path.concat(val));
    }
    if (right) {
      pathResolve(right, path.concat(val));
    }
  }
}
