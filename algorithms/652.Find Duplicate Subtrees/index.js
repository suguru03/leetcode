'use strict';

module.exports = { findDuplicateSubtrees };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
function findDuplicateSubtrees(root) {
  const map = {};
  const result = [];
  resolve(root);
  return result;

  function resolve(node) {
    if (!node) {
      return;
    }
    const { val, left, right } = node;
    const key = [val, resolve(left), resolve(right)].join(':');
    const obj = map[key];
    if (obj) {
      !obj.result && result.push(obj.node);
      obj.result = true;
    } else {
      map[key] = { node, result: false };
    }
    return key;
  }
}
