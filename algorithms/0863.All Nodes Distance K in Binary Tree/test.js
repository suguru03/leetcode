'use strict';

const assert = require('assert');

const { distanceK } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#distanceK', () => {
  const tests = [
    {
      root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
      target: [5],
      k: 2,
      result: [7, 4, 1],
    },
    {
      root: [1],
      target: [1],
      k: 3,
      result: [],
    },
    {
      root: [0, 2, 1, null, null, 3],
      target: [3],
      k: 3,
      result: [2],
    },
  ];
  makeTestTreeNodes(tests);
  makeTestTreeNodes(tests, 'target');

  for (const { root, _root, target, _target, k, result } of tests) {
    it(`${_root}, ${_target}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(distanceK(root, target, k), result);
    });
  }
});
