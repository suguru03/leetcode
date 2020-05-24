'use strict';

const assert = require('assert');
const _ = require('lodash');

const { pseudoPalindromicPaths } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#rangeSumBST', () => {
  const tests = [
    {
      root: [2, 3, 1, 3, 1, null, 1],
      result: 2,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(pseudoPalindromicPaths(root), result);
    });
  });
});
