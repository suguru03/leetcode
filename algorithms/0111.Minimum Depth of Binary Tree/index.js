'use strict';

module.exports = { minDepth, minDepth2, minDepth3, minDepth4 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
  return root ? dfs(root, 1) : 0;

  function dfs(node, depth) {
    if (!node) {
      return Infinity;
    }
    const { left, right } = node;
    if (!left && !right) {
      return depth;
    }
    return Math.min(dfs(left, ++depth), dfs(right, depth));
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth2(root) {
  if (!root) {
    return 0;
  }
  const left = minDepth2(root.left);
  const right = minDepth2(root.right);
  return (left && right ? Math.min(left, right) : left + right) + 1;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth3(root) {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let depth = 1;
  while (true) {
    let l = queue.length;
    while (l--) {
      const { left, right } = queue.shift();
      if (left === right) {
        return depth;
      }
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
    }
    depth++;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth3(root) {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let depth = 1;
  while (true) {
    let l = queue.length;
    while (l--) {
      const { left, right } = queue.shift();
      if (left === right) {
        return depth;
      }
      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
    }
    depth++;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth4(root) {
  if (!root) {
    return 0;
  }
  const queue = [[root, 1]];
  while (queue.length) {
    const [{ left, right }, depth] = queue.shift();
    if (left === right) {
      return depth;
    }
    if (left) {
      queue.push([left, depth + 1]);
    }
    if (right) {
      queue.push([right, depth + 1]);
    }
  }
}
