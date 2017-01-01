'use strict';

const _ = require('lodash');

module.exports = { makeLinkNodes };

class LinkNode {
  constructor(val) {
    this.val = val;
    this.next = null;
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

