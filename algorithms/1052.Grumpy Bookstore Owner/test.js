'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxSatisfied } = require('./');

describe('#maxSatisfied', () => {
  const tests = [
    {
      customers: [1, 0, 1, 2, 1, 1, 7, 5],
      grumpy: [0, 1, 0, 1, 0, 1, 0, 1],
      X: 3,
      result: 16,
    },
  ];

  _.forEach(tests, ({ customers, grumpy, X, result }) => {
    it(`${customers}, ${grumpy}, ${X} -> ${result}`, () => {
      assert.deepStrictEqual(maxSatisfied(customers, grumpy, X), result);
    });
  });
});
