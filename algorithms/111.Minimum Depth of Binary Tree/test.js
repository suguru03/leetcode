'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minDepth } = require('./');
const { makeTreeNodes } = require('../util');

describe('#minDepth', () => {

  const tests = [{
    root: [],
    result: 0
  }, {
    root: [1, 2],
    result: 1
  }, {
    root: [1, 2, 3, 4, 5, 6, 7],
    result: 3
  }, {
    root: [1, 2, 3, 4, 5, 6, 7, 8],
    result: 3
  }, {
    root: [1, null, 3, 4, 5, 6, 7, 8],
    result: 4
  }, {
    root: [1, 2, 3, 4, 5, 6, null, 8],
    result: 3
  }];

  _.forEach(tests, test => {
    const root = makeTreeNodes(test.root);
    test._root = test.root;
    test.root = root;
  });

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}] -> ${result}`, () => {
      assert.strictEqual(minDepth(root), result);
    });
  });
});
