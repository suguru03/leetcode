'use strict';

const assert = require('assert');
const _ = require('lodash');
const addTwoNumbers = require('./addTwoNumbers');
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

  it('(2 -> 4 -> 3 ) + (5 -> 6 -> 4) = (7 -> 0 -> 8)', () => {
    const l1 = makeLinkNodes([2, 4, 3]);
    const l2 = makeLinkNodes([5, 6, 4]);
    const result = [7, 0, 8];
    assert.deepEqual(addTwoNumbers(l1, l2), result);
  });

  it('(5 -> 6 -> 3 ) + (8 -> 4 -> 2) = (3 -> 1 -> 6)', () => {
    const l1 = makeLinkNodes([5, 6, 3]);
    const l2 = makeLinkNodes([8, 4, 2]);
    const result = [3, 1, 6];
    assert.deepEqual(addTwoNumbers(l1, l2), result);
  });

  it('(7 -> 5 -> 9 -> 4 -> 6) + (8 -> 4) = (5 -> 0 -> 0 -> 5 -> 6)', () => {
    const l1 = makeLinkNodes([7, 5, 9, 4, 6]);
    const l2 = makeLinkNodes([8, 4]);
    const result = [5, 0, 0, 5, 6];
    assert.deepEqual(addTwoNumbers(l1, l2), result);
  });
});
