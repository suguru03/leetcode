'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isUnivalTree } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#isUnivalTree', () => {
  const tests = [
    {
      root: [1, 1, 1, 1, 1, null, 1],
      result: true,
    },
    {
      root: [2, 2, 2, 5, 2],
      result: false,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(isUnivalTree(root), result);
    });
  });
});
