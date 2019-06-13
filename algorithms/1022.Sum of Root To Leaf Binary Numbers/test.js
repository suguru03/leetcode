'use strict';

const assert = require('assert');
const _ = require('lodash');
const { sumRootToLeaf } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#sumRootToLeaf', () => {
  const tests = [
    {
      root: [1, 0, 1, 0, 1, 0, 1],
      result: 22,
    },
    {
      root: [1, 0, 1, 0, 1, 0, 1, null, 1],
      result: 27,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(sumRootToLeaf(root), result);
    });
  });
});
