'use strict';

const assert = require('assert');
const _ = require('lodash');

const { maxPathSum } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#maxPathSum', () => {
  const tests = [
    {
      root: [1, 2, 3],
      result: 6,
    },
    {
      root: [-10, 9, 20, null, null, 15, 7],
      result: 42,
    },
    {
      root: [-3],
      result: -3,
    },
    {
      root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
      result: 48,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(maxPathSum(root), result);
    });
  });
});
