'use strict';

const assert = require('assert');
const _ = require('lodash');

const { isCousins } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#isCousins', () => {
  const tests = [
    {
      root: [1, 2, 3, 4],
      x: 4,
      y: 3,
      result: false,
    },
    {
      root: [1, 2, 3, null, 4, null, 5],
      x: 5,
      y: 4,
      result: true,
    },
    {
      root: [1, 2, 3, 4, 5, null, null, 7, null, 8],
      x: 7,
      y: 8,
      result: true,
    },
    {
      root: [1, 2, 3, null, 4],
      x: 2,
      y: 3,
      result: false,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, x, y, result }) => {
    it(`${_root}, ${x}, ${y} -> ${result}`, () => {
      assert.deepStrictEqual(isCousins(root, x, y), result);
    });
  });
});
