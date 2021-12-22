'use strict';

const assert = require('assert');

const { postorderTraversal } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#postorderTraversal', () => {
  const tests = [
    {
      root: [1, null, 2, 3],
      result: [3, 2, 1],
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, result } of tests) {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(postorderTraversal(root), result);
    });
  }
});
