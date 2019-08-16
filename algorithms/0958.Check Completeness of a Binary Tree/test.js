'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isCompleteTree } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#isCompleteTree', () => {
  const tests = [
    {
      root: [1, 2, 3, 4, 5, 1, 1, 6],
      result: true,
    },
    {
      root: [1, null, 2, null, 3, null, 4, null, 5, null, 6, null],
      result: false,
    },
    {
      root: [1, 2, 3, 4, 5, null, null, 6, 7],
      result: false,
    },
    {
      root: [],
      result: true,
    },
    {
      root: [1, 2, 3, 5, null, 7, 8],
      result: false,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(isCompleteTree(root), result);
    });
  });
});
