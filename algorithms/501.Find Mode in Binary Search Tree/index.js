'use strict';

module.exports = { findMode, findMode2, findMode3 };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function findMode(root) {
  let max = 0;
  const map = {};
  dfs(root);

  const ans = [];
  for (const [num, val] of Object.entries(map)) {
    if (val === max) {
      ans.push(Number(num));
    }
  }
  return ans;

  function dfs(node) {
    if (!node) {
      return;
    }
    const { val, right, left } = node;
    map[val] = ++map[val] || 1;
    max = Math.max(max, map[val]);
    dfs(left);
    dfs(right);
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function findMode2(root) {
  const map = {};
  dfs(root);

  const keys = Object.keys(map);
  const values = Object.values(map);
  const max = Math.max.apply(null, values);
  const ans = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] === max) {
      ans.push(Number(keys[i]));
    }
  }
  return ans;

  function dfs(node) {
    if (!node) {
      return;
    }
    const { val, right, left } = node;
    map[val] = ++map[val] || 1;
    dfs(left);
    dfs(right);
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function findMode3(root) {
  let cur;
  let count;
  let maxCount = 1;
  const modes = [];
  dfs(root);
  return modes;

  function dfs(node) {
    if (!node) {
      return;
    }
    dfs(node.left);
    check(node.val);
    dfs(node.right);
  }

  function check(val) {
    if (val !== cur) {
      cur = val;
      count = 1;
    } else {
      count++;
    }
    if (count === maxCount) {
      modes.push(val);
    } else if (count > maxCount) {
      maxCount = count;
      if (modes.length !== 1) {
        modes.length = 1;
        modes[0] = val;
      }
    }
  }
}
