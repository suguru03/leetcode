'use strict';

module.exports = { leafSimilar, leafSimilar2, leafSimilar3 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar(root1, root2) {
  const leaves1 = dfs(root1);
  const leaves2 = dfs(root2);
  return leaves1.length === leaves2.length && leaves1.every((n, i) => n === leaves2[i]);

  function dfs(node) {
    if (!node) {
      return [];
    }
    const { val, left, right } = node;
    if (!left && !right) {
      return [val];
    }
    return [...dfs(left), ...dfs(right)];
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar2(root1, root2) {
  const leaves1 = dfs(root1);
  const leaves2 = dfs(root2);
  return leaves1.length === leaves2.length && leaves1.every((n, i) => n === leaves2[i]);

  function dfs(root) {
    const leaves = [];
    const stack = [root];
    while (stack.length) {
      const node = stack.pop();
      if (!node) {
        continue;
      }
      const { val, left, right } = node;
      if (left || right) {
        stack.push(left, right);
        continue;
      }
      leaves.push(val);
    }
    return leaves;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar3(root1, root2) {
  let prev = null;
  const stack1 = [root1];
  const stack2 = [root2];
  let stack = stack1;
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      continue;
    }
    const { val, left, right } = node;
    if (left || right) {
      stack.push(left, right);
      continue;
    }
    if (stack === stack1) {
      prev = val;
      stack = stack2;
      continue;
    }
    if (prev !== val) {
      return false;
    }
    stack = stack1;
  }
  return stack1.length === stack2.filter(n => n !== null).length;
}
