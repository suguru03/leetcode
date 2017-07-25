'use strict';

const assert = require('assert');
const _ = require('lodash');
const { hasCycle } = require('./');
const { makeLinkNodes } = require('../util');

describe('#hasCycle', () => {

  const tests = [{
    head: [1, 2, 3],
    result: false
  }, {
    head: [1],
    result: false
  }];

  _.forEach(tests, test => {
    const head = test.head;
    test._head = head;
    test.head = makeLinkNodes(head);
  });

  _.forEach(tests, ({ head, _head, result }) => {
    it(`${_head} -> ${result}`, () => {
      assert.strictEqual(hasCycle(head), result);
    });
  });
});
