'use strict';

const _ = require('lodash');

class LinkNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  LinkNode,
  TreeNode,
  makeLinkNodes,
  makeTreeNodes
};

function makeLinkNodes(array) {
  return _.chain(array)
    .map(n => new LinkNode(n))
    .reduce((result, node) => {
      let target = result;
      while (target.next) {
        target = target.next;
      }
      target.next = node;
      return result;
    })
    .value();
}

// TODO This is wrong, #104
function makeTreeNodes(array) {
  const l = array.length;
  if (!l) {
    return null;
  }
  let i = 0;
  const root = new TreeNode(array[i++]);
  makeTree([root]);
  return root;

  function makeTree(parents) {
    if (i >= l) {
      return;
    }
    const children = [];
    _.forEach(parents, parent => {
      const left = array[i++];
      const right = array[i++];
      if (left !== null && left !== undefined) {
        const node = new TreeNode(left);
        parent.left = node;
        children.push(node);
      }
      if (right !== null && right !== undefined) {
        const node = new TreeNode(right);
        parent.right = node;
        children.push(node);
      }
    });
    makeTree(children);
  }
}
