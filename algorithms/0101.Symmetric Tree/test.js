'use strict';

const assert = require('assert');

const { isSymmetric } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#isSymmetric', () => {
  const tests = [
    {
      root: [1, 2, 2, 3, 4, 4, 3],
      result: true,
    },
    {
      root: [1, 2, 2, null, 3, null, 3],
      result: false,
    },
    {
      root: [1, 2, 2, 4, 4],
      result: false,
    },
    {
      root: [1, 2, 2, 4, null, null, 4],
      result: true,
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, result } of tests) {
    it(`[${_root}] -> ${result}`, () => {
      assert.strictEqual(isSymmetric(root), result);
    });
  }
});
