'use strict';

const assert = require('assert');
const _ = require('lodash');

const { averageOfSubtree } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#averageOfSubtree', () => {
  const tests = [
    {
      root: [4, 8, 5, 0, 1, null, 6],
      result: 5,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(averageOfSubtree(root), result);
    });
  });
});
