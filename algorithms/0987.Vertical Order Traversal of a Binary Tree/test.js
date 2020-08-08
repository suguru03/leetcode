'use strict';

const assert = require('assert');
const _ = require('lodash');

const { makeTestTreeNodes } = require('../util');
const { verticalTraversal } = require('./');

describe('#verticalTraversal', () => {
  const tests = [
    {
      root: [3, 9, 20, null, null, 15, 7],
      result: [[9], [3, 15], [20], [7]],
    },
    {
      root: [1, 2, 3, 4, 5, 6, 7],
      result: [[4], [2], [1, 5, 6], [3], [7]],
    },
    {
      root: [0, 2, 1, 3, null, null, null, 4, 5, null, 7, 6, null, 10, 8, 11, 9],
      result: [[4, 10, 11], [3, 6, 7], [2, 5, 8, 9], [0], [1]],
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(verticalTraversal(root), result);
    });
  });
});
