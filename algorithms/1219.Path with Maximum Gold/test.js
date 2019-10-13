'use strict';

const assert = require('assert');
const _ = require('lodash');
const { getMaximumGold } = require('./');

describe('#getMaximumGold', () => {
  const tests = [
    {
      grid: [],
      result: 0,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(getMaximumGold(grid), result);
    });
  });
});
