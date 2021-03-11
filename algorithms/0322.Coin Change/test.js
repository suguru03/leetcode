'use strict';

const assert = require('assert');

const { coinChange } = require('./');

describe('#coinChange', () => {
  const tests = [
    {
      coins: [1, 2, 5],
      amount: 11,
      result: 3,
    },
    {
      coins: [2],
      amount: 3,
      result: -1,
    },
  ];

  for (const { coins, amount, result } of tests) {
    it(`${coins}, ${amount} -> ${result}`, () => {
      assert.deepStrictEqual(coinChange(coins, amount), result);
    });
  }
});
