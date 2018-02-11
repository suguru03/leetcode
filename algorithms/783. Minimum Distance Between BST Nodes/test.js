'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minDiffInBST } = require('./');
const { makeTestTreeNodes } = require('../util');

describe('#minDiffInBST', () => {
  const tests = [
    {
      root: [4, 2, 6, 1, 3, null, null],
      result: 1,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, result }) => {
    it(`${_root} -> ${result}`, () => {
      assert.deepStrictEqual(minDiffInBST(root), result);
    });
  });
});
