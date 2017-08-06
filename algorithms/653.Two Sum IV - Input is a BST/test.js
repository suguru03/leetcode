'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findTarget } = require('./');
const { makeTreeNodes } = require('../util');

describe('#findTarget', () => {

  const tests = [{
    root: [5, 3, 6, 2, 4, 7],
    k: 9,
    result: true
  }, {
    root: [5, 3, 6, 2, 4, 7],
    k: 28,
    result: false
  }];

  _.forEach(tests, test => {
    const { root } = test;
    test.root = makeTreeNodes(root);
    test._root = root;
  });

  _.forEach(tests, ({ root, _root, k, result }) => {
    it(`[${_root}] -> ${result}`, () => {
      assert.strictEqual(findTarget(root, k), result);
    });
  });
});
