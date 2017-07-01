'use strict';

const _ = require('lodash');

module.exports = { makeLinkNodes, makeTreeNodes };

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
  const nodes = _.map(array, n => new TreeNode(n));
  for (let i = 1; i < l; i++) {
    const node = nodes[i];
    const target = nodes[(i - 1) / 2 | 0];
    if (i % 2 === 0) {
      target.left = node;
    } else {
      target.right = node;
    }
  }
  return nodes[0];
}
