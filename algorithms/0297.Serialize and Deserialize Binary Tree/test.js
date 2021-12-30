'use strict';

const assert = require('assert');

const { serialize, deserialize } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#constructMaximumBinaryTree', () => {
  const tests = [
    {
      root: [1, 2, 3, null, null, 4, 5],
      result: [1, 2, 3, null, null, 4, 5],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'result');

  for (const { root, _root, result } of tests) {
    it(`[${_root}]`, () => {
      assert.deepStrictEqual(deserialize(serialize(root)), result);
    });
  }
});
