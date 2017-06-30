'use strict';

const assert = require('assert');
const _ = require('lodash');

const { isSymmetric } = require('./');
const { makeTreeNodes } = require('../util');

describe('#isSymmetric', () => {

  const tests = [{
    root: [1, 2, 2, 3, 4, 4, 3],
    result: true
  }, {
    root: [1, 2, 2, null, 3, null, 3],
    result: false
  }, {
    root: [1, 2, 2, 4, 4],
    result: false
  }, {
    root: [1, 2, 2, 4, null, null, 4],
    result: true
  }];

  _.forEach(tests, test => {
    const root = makeTreeNodes(test.root);
    test._root = test.root;
    test.root = root;
  });

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}] -> ${result}`, () => {
      assert.strictEqual(isSymmetric(root), result);
    });
  });
});
