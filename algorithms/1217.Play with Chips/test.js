'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minCostToMoveChips } = require('./');

describe('#minCostToMoveChips', () => {
  const tests = [
    {
      chips: [1, 2, 3],
      result: 1,
    },
  ];

  _.forEach(tests, ({ chips, result }) => {
    it(`${chips} -> ${result}`, () => {
      assert.deepStrictEqual(minCostToMoveChips(chips), result);
    });
  });
});
