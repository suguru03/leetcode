'use strict';

const assert = require('assert');

const { hasPathSum } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#hasPathSum', () => {
  const tests = [
    {
      root: [],
      sum: 1,
      result: false,
    },
    {
      root: [],
      sum: 0,
      result: false,
    },
    {
      root: [1, 2],
      sum: 1,
      result: false,
    },
    {
      root: [5, 4, 8, 11, 13, 4, 7, 2, null, 1],
      sum: 22,
      result: true,
    },
    {
      root: [1, 2, null, 3, null, 4],
      sum: 2,
      result: false,
    },
    {
      root: [-2, null, -3],
      sum: -5,
      result: true,
    },
    {
      root: [1, -2, -3, 1, 3, -2, null, -1],
      sum: -1,
      result: true,
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, sum, result } of tests) {
    it(`[${_root}] -> ${result}`, () => {
      assert.strictEqual(hasPathSum(root, sum), result);
    });
  }
});
