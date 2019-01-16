'use strict';

const assert = require('assert');
const _ = require('lodash');
const { widthOfBinaryTree } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#widthOfBinaryTree', () => {
  const tests = [
    {
      root: [1, 3, 2, 5, 3, null, 9],
      result: 4,
    },
    {
      root: [1, 3, null, 5, 3],
      result: 2,
    },
    {
      root: [1, 3, 2, 5],
      result: 2,
    },
    {
      root: [1, 3, 2, 5, null, null, 5, 3, null, null, 4],
      result: 8,
    },
    {
      root: [1, 3, 2, 5, null, null, 5, 3, null, 10, null],
      result: 7,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}]k -> ${result}`, () => {
      assert.strictEqual(widthOfBinaryTree(root), result);
    });
  });
});
