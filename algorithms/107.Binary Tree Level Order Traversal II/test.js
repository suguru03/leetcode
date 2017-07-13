'use strict';

const assert = require('assert');
const _ = require('lodash');
const { levelOrderBottom } = require('./');
const { makeTreeNodes } = require('../util');

describe('#levelOrderBottom', () => {

  const tests = [{
    root: [1, 2, 3, 4, 4, 5, 6, 7],
    result: [[7], [4, 4, 5, 6], [2, 3], [1]]
  }];

  _.forEach(tests, test => {
    const root = makeTreeNodes(test.root);
    test._root = test.root;
    test.root = root;
  });

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}] -> ${result}`, () => {
      assert.deepEqual(levelOrderBottom(root), result);
    });
  });
});
