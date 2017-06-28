'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxProfit } = require('./');

describe('#maxProfit', () => {

  const tests = [{
    prices: [7, 1, 5, 3, 6, 4],
    result: 5
  }, {
    prices: [7, 6, 4, 3, 1],
    result: 0
  }, {
    prices: [7, 1, 6],
    result: 5
  }, {
    prices: [7, 1, 4, 3, 5, 2, 8],
    result: 7
  }, {
    prices: [7, 1, 4, 3, 5, 2],
    result: 4
  }, {
    prices: [2, 4, 1],
    result: 2
  }, {
    prices: [1, 2],
    result: 1
  }];

  _.forEach(tests, ({ prices, result }) => {
    it(`${prices} -> ${result}`, () => {
      assert.strictEqual(maxProfit(prices), result);
    });
  });
});
