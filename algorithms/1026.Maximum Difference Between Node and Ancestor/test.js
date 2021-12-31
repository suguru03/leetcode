'use strict';

const assert = require('assert');

const { maxAncestorDiff } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#maxAncestorDiff', () => {
  const tests = [
    {
      root: [8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13],
      result: 7,
    },
    {
      root: [1, null, 2, null, 0, 3],
      result: 3,
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, result } of tests) {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(maxAncestorDiff(root), result);
    });
  }
});
