'use strict';

const assert = require('assert');
const _ = require('lodash');

const { numWaterBottles } = require('./');

describe('#numWaterBottles', () => {
  const tests = [
    {
      numBottles: 9,
      numExchange: 3,
      result: 13,
    },
    {
      numBottles: 15,
      numExchange: 4,
      result: 19,
    },
    {
      numBottles: 5,
      numExchange: 5,
      result: 6,
    },
    {
      numBottles: 2,
      numExchange: 3,
      result: 2,
    },
  ];

  _.forEach(tests, ({ numBottles, numExchange, result }) => {
    it(`${numBottles}, ${numExchange} -> ${result}`, () => {
      assert.deepStrictEqual(numWaterBottles(numBottles, numExchange), result);
    });
  });
});
