'use strict';

module.exports = {
  levelOrderBottom,
  levelOrderBottom2,
  levelOrderBottom3,
  levelOrderBottom4,
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
  const depth = maxDepth(root);
  const result = Array(depth);
  addResult(root, result, 0);
  return result;
}

function maxDepth(root) {
  return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

function addResult(node, result, index) {
  if (!node) {
    return;
  }
  const i = result.length - ++index;
  const array = (result[i] = result[i] || []);
  array.push(node.val);
  addResult(node.left, result, index);
  addResult(node.right, result, index);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom2(root) {
  return resolveResult(root, [], 0);
}

function resolveResult(node, result, depth) {
  if (!node) {
    return result;
  }
  if (result.length < ++depth) {
    result.unshift([]);
  }
  result[result.length - depth].push(node.val);
  return resolveResult(node.left, result, depth) && resolveResult(node.right, result, depth);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom3(root) {
  const result = [];
  dfs(root, 0);
  return result.reverse();

  function dfs(node, level) {
    if (!node) {
      return;
    }
    result[level] = result[level] || [];
    result[level++].push(node.val);
    dfs(node.left, level);
    dfs(node.right, level);
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom4(root) {
  const result = [];
  if (!root) {
    return result;
  }
  let level = -1;
  let list = [root];
  while (list.length) {
    result[++level] = [];
    const queue = [];
    for (const node of list) {
      if (!node) {
        continue;
      }
      const { val, left, right } = node;
      result[level].push(val);
      left && queue.push(left);
      right && queue.push(right);
    }
    list = queue;
  }
  return result.reverse();
}
