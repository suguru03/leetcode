'use strict';

const assert = require('assert');
const _ = require('lodash');
const { combinationSum } = require('./');

describe('#combinationSum', () => {
  const tests = [
    {
      candidates: [2, 3, 6, 7],
      target: 7,
      result: [[7], [3, 2, 2]],
    },
    {
      candidates: [2, 3, 5],
      target: 8,
      result: [[5, 3], [3, 3, 2], [2, 2, 2, 2]],
    },
  ];

  _.forEach(tests, ({ candidates, target, result }) => {
    it(`${candidates}, ${target} -> ${result}`, () => {
      assert.deepStrictEqual(combinationSum(candidates, target), result);
    });
  });
});
