'use strict';

const assert = require('assert');
const _ = require('lodash');

const { nthUglyNumber } = require('./');

describe('#nthUglyNumber', () => {
  const tests = [
    {
      n: 10,
      result: 12,
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(nthUglyNumber(n), result);
    });
  });
});
