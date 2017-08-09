'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isBalanced } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#isBalanced', () => {

  const tests = [{
    root: [1, 2, 3],
    result: true
  }, {
    root: [1, 2, 3, 4, null, null, null, 5, null, 6],
    result: false
  }];

  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}] -> ${result}`, () => {
      assert.strictEqual(isBalanced(root), result);
    });
  });
});
