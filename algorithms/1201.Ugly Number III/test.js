'use strict';

const assert = require('assert');
const _ = require('lodash');
const { nthUglyNumber } = require('./');

describe('#nthUglyNumber', () => {
  const tests = [
    {
      n: 3,
      a: 2,
      b: 3,
      c: 5,
      result: 4,
    },
    {
      n: 4,
      a: 2,
      b: 3,
      c: 4,
      result: 6,
    },
    {
      n: 5,
      a: 2,
      b: 11,
      c: 13,
      result: 10,
    },
    {
      n: 1000000000,
      a: 2,
      b: 217983653,
      c: 336916467,
      result: 1999999984,
    },
  ];

  _.forEach(tests, ({ n, a, b, c, result }) => {
    it(`${n}, ${a}, ${b}, ${c} -> ${result}`, () => {
      assert.deepStrictEqual(nthUglyNumber(n, a, b, c), result);
    });
  });
});
