'use strict';

module.exports = { isCousins, isCousins2, isCousins3, isCousins4, isCousins5 };

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
function isCousins4(root, x, y) {
  const queue = [new Node(root)];
  while (queue.length) {
    const next = [];
    let cousinParent = null;
    while (queue.length) {
      const { node, parent } = queue.shift();
      if (!node) {
        continue;
      }
      const { val, left, right } = node;
      if (val === x || val === y) {
        if (cousinParent) {
          return cousinParent !== parent;
        }
        cousinParent = parent;
        continue;
      }
      next.push(new Node(left, node), new Node(right, node));
    }
    if (cousinParent) {
      return false;
    }
    queue.push(...next);
  }
  return false;
}

class Node {
  constructor(node, parent) {
    this.node = node;
    this.parent = parent;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins5(root, x, y) {
  const queue = [[root, null]];
  let found = null;
  while (queue.length !== 0 && found === null) {
    let count = queue.length;
    while (--count >= 0) {
      const [node, parent] = queue.shift();
      if (!node) {
        continue;
      }
      queue.push([node.left, node], [node.right, node]);
      if (node.val !== x && node.val !== y) {
        continue;
      }

      if (found != null) {
        return found !== parent;
      }

      found = parent;
    }
  }

  return false;
}
