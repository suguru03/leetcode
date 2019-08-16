'use strict';

const assert = require('assert');
const _ = require('lodash');
const { checkEqualTree } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#checkEqualTree', () => {
  const tests = [
    {
      root: [5, 10, 10, null, null, 2, 3],
      result: true,
    },
    {
      root: [1, 2, 10, null, null, 2, 20],
      result: false,
    },
    {
      root: [0, -1, 1],
      result: false,
    },
    {
      root: [0, -4, -3, null, -1, 8, null, null, 3, null, -9, -2, null, 4],
      result: true,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}] -> ${result}`, () => {
      assert.strictEqual(checkEqualTree(root), result);
    });
  });
});
