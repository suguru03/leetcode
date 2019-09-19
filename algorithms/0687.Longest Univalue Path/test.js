'use strict';

const assert = require('assert');
const _ = require('lodash');
const { longestUnivaluePath } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#longestUnivaluePath', () => {
  const tests = [
    {
      root: [5, 4, 5, 1, 1],
      result: 1,
    },
    {
      root: [5, 4, 1, 1, 1],
      result: 0,
    },
    {
      root: [5, 4, 5, 1, 1, 5, 5],
      result: 2,
    },
    {
      root: [1, 4, 5, 4, 4, 5],
      result: 2,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(longestUnivaluePath(root), result);
    });
  });
});
