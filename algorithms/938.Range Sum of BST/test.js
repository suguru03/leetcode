'use strict';

const assert = require('assert');
const _ = require('lodash');

const { rangeSumBST } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#rangeSumBST', () => {
  const tests = [
    {
      root: [10, 5, 15, 3, 7, null, 18],
      L: 7,
      R: 15,
      result: 32,
    },
    {
      root: [10, 5, 15, 3, 7, 13, 18, 1, null, 6],
      L: 6,
      R: 10,
      result: 23,
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, L, R, result }) => {
    it(`${_root}, ${L}, ${R} -> ${result}`, () => {
      assert.deepStrictEqual(rangeSumBST(root, L, R), result);
    });
  });
});
