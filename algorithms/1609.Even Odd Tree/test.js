'use strict';

const assert = require('assert');

const { isEvenOddTree } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#isEvenOddTree', () => {
  const tests = [
    {
      root: [1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2],
      result: true,
    },
    {
      root: [5, 4, 2, 3, 3, 7],
      result: false,
    },
    {
      root: [5, 9, 1, 3, 5, 7],
      result: false,
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, result } of tests) {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(isEvenOddTree(root), result);
    });
  }
});
