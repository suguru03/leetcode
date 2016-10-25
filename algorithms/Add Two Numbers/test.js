'use strict';

const assert = require('assert');
const _ = require('lodash');
const addTwoNumbers = require('./');
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

describe('#addTwoNumbers', () => {

  const tests = [{
    l1: [2, 4, 3],
    l2: [5, 6, 4],
    result: [7, 0, 8]
  }, {
    l1: [5, 6, 3],
    l2: [8, 4, 2],
    result: [3, 1, 6]
  }, {
    l1: [7, 5, 9, 4, 6],
    l2: [8, 4],
    result: [5, 0, 0, 5, 6]
  }];

  _.forEach(tests, ({ l1, l2, result }) => {
    it(`[${l1}] + [${l2}] = [${result}]`, () => {
      l1 = makeLinkNodes(l1);
      l2 = makeLinkNodes(l2);
      assert.deepEqual(addTwoNumbers(l1, l2), result);
    });
  });
});
