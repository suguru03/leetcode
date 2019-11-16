'use strict';

const assert = require('assert');
const _ = require('lodash');
const { binaryTreePaths } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#binaryTreePaths', () => {
  const tests = [
    {
      root: [1, 2, 3, null, 5],
      result: ['1->2->5', '1->3'],
    },
    {
      root: [1],
      result: ['1'],
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}] -> ${result}`, () => {
      assert.deepStrictEqual(binaryTreePaths(root), result);
    });
  });
});
