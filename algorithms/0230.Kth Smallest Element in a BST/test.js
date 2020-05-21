'use strict';

const assert = require('assert');
const _ = require('lodash');

const { kthSmallest } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#kthSmallest', () => {
  const tests = [
    {
      root: [3, 1, 4, null, 2],
      k: 1,
      result: 1,
    },
    {
      root: [5, 3, 6, 2, 4, null, null, 1],
      k: 3,
      result: 3,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, k, result }) => {
    it(`${_root}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(kthSmallest(root, k), result);
    });
  });
});
