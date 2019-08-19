'use strict';

module.exports = { isCousins, isCousins2, isCousins3, isCousins4 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins(root, x, y) {
  const [dx, px] = dfs(root, x, 0, null) || [];
  const [dy, py] = dfs(root, y, 0, null) || [];
  if (!dx || !dy) {
    return false;
  }
  return dx === dy && px !== py;
}

function dfs(node, v, d, parent) {
  if (!node) {
    return null;
  }
  ++d;
  const { val, left, right } = node;
  if (val === v) {
    return [d, parent];
  }
  return dfs(left, v, d, node) || dfs(right, v, d, node);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins2(root, x, y) {
  let dx;
  let dy;
  let px;
  let py;
  dfs(root, 0, null);
  return dx === dy && px !== py;

  function dfs(node, d, parent) {
    if (!node) {
      return;
    }
    ++d;
    const { val, left, right } = node;
    if (val === x) {
      dx = d;
      px = parent;
    }
    if (val === y) {
      dy = d;
      py = parent;
    }
    dfs(left, d, node);
    dfs(right, d, node);
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins3(root, x, y) {
  const [dx, px] = dfs3(root, x) || [];
  const [dy, py] = dfs3(root, y) || [];
  if (!dx || !dy) {
    return false;
  }
  return dx === dy && px !== py;
}

function dfs3(node, v) {
  if (!node) {
    return null;
  }
  const { val, left, right } = node;
  if (val === v) {
    return [1];
  }
  const [depth, parent] = dfs3(left, v) || dfs3(right, v) || [];
  return depth ? [depth + 1, parent || node] : null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val
 *     this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins4(root, x, y) {
  if (!root) {
    return false;
  }
  root.parent = {};
  let queue = [root];
  while (queue.length) {
    let px;
    let py;
    let { length } = queue;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (!node) {
        continue;
      }
      const { val, left, right, parent } = node;
      if (val === x) {
        px = parent;
      }
      if (val === y) {
        py = parent;
      }
      if (left) {
        left.parent = node;
        queue.push(left);
      }
      if (right) {
        right.parent = node;
        queue.push(right);
      }
    }
    if (px && py) {
      return px !== py;
    }
    if (!px ^ !py) {
      return false;
    }
  }
  return false;
}
