'use strict';

const assert = require('assert');
const _ = require('lodash');
const { pathSum } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#pathSum', () => {
  const tests = [
    {
      root: [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1],
      sum: 8,
      result: 3,
    },
    {
      root: [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1],
      sum: 3,
      result: 3,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, sum, result }) => {
    it(`${_root}, ${sum} -> ${result}`, () => {
      assert.deepStrictEqual(pathSum(root, sum), result);
    });
  });
});
