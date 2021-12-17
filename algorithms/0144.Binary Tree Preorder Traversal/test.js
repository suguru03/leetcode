'use strict';

const assert = require('assert');

const { preorderTraversal } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#preorderTraversal', () => {
  const tests = [
    {
      root: [1, null, 2, 3],
      result: [1, 2, 3],
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, result } of tests) {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(preorderTraversal(root), result);
    });
  }
});
