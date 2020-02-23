'use strict';

const assert = require('assert');
const _ = require('lodash');
const { closestDivisors } = require('./');

describe('#closestDivisors', () => {
  const tests = [
    {
      num: 8,
      result: [3, 3],
    },
    {
      num: 123,
      result: [5, 25],
    },
    {
      num: 999,
      result: [25, 40],
    },
  ];

  _.forEach(tests, ({ num, result }) => {
    it(`${num} -> ${result}`, () => {
      assert.deepStrictEqual(closestDivisors(num), result);
    });
  });
});
