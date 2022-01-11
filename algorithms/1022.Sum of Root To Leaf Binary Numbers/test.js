'use strict';

const assert = require('assert');

const { sumRootToLeaf } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#sumRootToLeaf', () => {
  const tests = [
    {
      root: [1, 0, 1, 0, 1, 0, 1],
      result: 22,
    },
    {
      root: [1, 0, 1, 0, 1, 0, 1, null, 1],
      result: 27,
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, result } of tests) {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(sumRootToLeaf(root), result);
    });
  }
});
