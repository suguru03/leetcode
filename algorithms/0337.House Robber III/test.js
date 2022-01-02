'use strict';

const assert = require('assert');

const { rob } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#rob', () => {
  const tests = [
    {
      root: [3, 2, 3, null, 3, null, 1],
      result: 7,
    },
    {
      root: [3, 4, 5, 1, 3, null, 1],
      result: 9,
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, result } of tests) {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(rob(root), result);
    });
  }
});
