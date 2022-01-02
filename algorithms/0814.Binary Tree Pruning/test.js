'use strict';

const assert = require('assert');

const { pruneTree } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#pruneTree', () => {
  const tests = [
    {
      root: [1, null, 0, 0, 1],
      result: [1, null, 0, null, 1],
    },
    {
      root: [1, 0, 1, 0, 0, 0, 1],
      result: [1, null, 1, null, 1],
    },
    {
      root: [1, 1, 0, 1, 1, 0, 1, 0],
      result: [1, 1, 0, 1, 1, null, 1],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  for (const { root, _root, result, _result } of tests) {
    it(`${_root} -> ${_result}`, () => {
      assert.deepStrictEqual(pruneTree(root), result);
    });
  }
});
