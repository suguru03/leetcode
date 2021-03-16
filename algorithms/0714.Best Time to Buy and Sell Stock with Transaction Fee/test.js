'use strict';

const assert = require('assert');

const { maxProfit } = require('./');

describe('#maxProfit', () => {
  const tests = [
    {
      prices: [1, 3, 2, 8, 4, 9],
      fee: 2,
      result: 8,
    },
  ];

  for (const { prices, fee, result } of tests) {
    it(`${prices}, ${fee} -> ${result}`, () => {
      assert.deepStrictEqual(maxProfit(prices, fee), result);
    });
  }
});
