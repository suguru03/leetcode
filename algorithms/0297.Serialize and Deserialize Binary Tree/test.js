'use strict';

const assert = require('assert');

const { serialize, deserialize } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#constructMaximumBinaryTree', () => {
  const tests = [
    {
      root: [1, 2, 3, null, null, 4, 5],
      result1: [1, 2, 3, null, null, 4, 5].toString(),
      result2: [1, 2, 3, null, null, 4, 5],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result2');

  for (const { root, _root, result1, result2 } of tests) {
    it(`[${_root}]`, () => {
      assert.deepStrictEqual(serialize(root), result1);
      assert.deepStrictEqual(deserialize(result1), result2);
    });
  }
});
