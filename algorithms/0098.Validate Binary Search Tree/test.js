'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isValidBST } = require('./');

const { makeTestTreeNodes } = require('../utils');

describe('#isValidBST', () => {
  const tests = [
    {
      root: [2, 1, 3],
      result: true,
    },
    {
      root: [5, 1, 4, null, null, 3, 6],
      result: false,
    },
    {
      root: [5, 1, 6, null, null, 3, 7],
      result: false,
    },
    {
      root: [4, 3, 6, 1, null, 5, 7],
      result: true,
    },
    {
      root: [0, null, 1],
      result: true,
    },
    {
      root: [1, 1],
      result: false,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(isValidBST(root), result);
    });
  });
});
