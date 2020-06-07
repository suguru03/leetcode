'use strict';

const assert = require('assert');
const _ = require('lodash');
const { change } = require('./');

describe('#change', () => {
  const tests = [
    {
      amount: 5,
      coins: [1, 2, 5],
      result: 4,
    },
    {
      amount: 3,
      coins: [2],
      result: 0,
    },
    {
      amount: 10,
      coins: [10],
      result: 1,
    },
    {
      amount: 20,
      coins: [1, 2, 5],
      result: 29,
    },
    {
      amount: 0,
      coins: [],
      result: 1,
    },
    {
      amount: 500,
      coins: [2, 7, 13],
      result: 717,
    },
  ];
  // tests.splice(1);

  _.forEach(tests, ({ amount, coins, result }) => {
    it(`${amount}, ${coins} -> ${result}`, () => {
      assert.deepStrictEqual(change(amount, coins), result);
    });
  });
});
