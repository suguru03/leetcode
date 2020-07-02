'use strict';

const assert = require('assert');
const _ = require('lodash');

const { arrangeCoins } = require('./');

describe('#arrangeCoins', () => {
  const tests = [
    {
      n: 5,
      result: 2,
    },
    {
      n: 8,
      result: 3,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(arrangeCoins(n), result);
    });
  });
});
