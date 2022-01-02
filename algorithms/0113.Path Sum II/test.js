'use strict';

const assert = require('assert');

const { pathSum } = require('./');
const { makeTestTreeNodes } = require('../utils');

describe('#pathSum', () => {
  const tests = [
    {
      root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
      targetSum: 22,
      result: [
        [5, 4, 11, 2],
        [5, 8, 4, 5],
      ],
    },
  ];
  makeTestTreeNodes(tests);

  for (const { root, _root, targetSum, result } of tests) {
    it(`${_root}, ${targetSum} -> ${result}`, () => {
      assert.deepStrictEqual(pathSum(root, targetSum), result);
    });
  }
});
