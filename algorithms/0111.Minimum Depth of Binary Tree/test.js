'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minDepth } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#minDepth', () => {
  const tests = [
    {
      root: [],
      result: 0,
    },
    {
      root: [1, 2],
      result: 2,
    },
    {
      root: [1, 2, 3, 4, 5, 6, 7],
      result: 3,
    },
    {
      root: [1, 2, 3, 4, 5, 6, 7, 8],
      result: 3,
    },
    {
      root: [1, null, 3, 4, 5, 6, 7, 8],
      result: 4,
    },
    {
      root: [1, 2, 3, 4, 5, 6, null, 8],
      result: 3,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`[${_root}] -> ${result}`, () => {
      assert.strictEqual(minDepth(root), result);
    });
  });
});
