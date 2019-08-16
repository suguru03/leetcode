'use strict';

const assert = require('assert');
const _ = require('lodash');
const { lemonadeChange } = require('./');

describe('#lemonadeChange', () => {
  const tests = [
    {
      bills: [5, 5, 5, 10, 20],
      result: true,
    },
    {
      bills: [10, 20],
      result: false,
    },
  ];

  _.forEach(tests, ({ bills, result }) => {
    it(`${bills} -> ${result}`, () => {
      assert.deepStrictEqual(lemonadeChange(bills), result);
    });
  });
});
