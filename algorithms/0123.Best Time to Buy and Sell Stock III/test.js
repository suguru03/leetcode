'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxProfit } = require('./');

describe('#maxProfit', () => {
  const tests = [
    {
      prices: [3, 3, 5, 0, 0, 3, 1, 4],
      result: 6,
    },
    {
      prices: [1, 2, 3, 4, 5],
      result: 4,
    },
    {
      prices: [7, 6, 4, 3, 1],
      result: 0,
    },
    {
      prices: [],
      result: 0,
    },
    {
      prices: [1, 0, 2, 0, 5],
      result: 7,
    },
    {
      prices: [1],
      result: 0,
    },
    {
      prices: [1, 2, 4],
      result: 3,
    },
  ];

  _.forEach(tests, ({ prices, result }) => {
    it(`${prices} -> ${result}`, () => {
      assert.deepStrictEqual(maxProfit(prices), result);
    });
  });
});
