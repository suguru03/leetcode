'use strict';

const assert = require('assert');
const _ = require('lodash');
const { hasCycle } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#hasCycle', () => {

  const tests = [{
    head: [1, 2, 3],
    result: false
  }, {
    head: [1],
    result: false
  }];

  makeTestLinkNodes(tests, 'head');

  _.forEach(tests, ({ head, _head, result }) => {
    it(`${_head} -> ${result}`, () => {
      assert.strictEqual(hasCycle(head), result);
    });
  });
});
