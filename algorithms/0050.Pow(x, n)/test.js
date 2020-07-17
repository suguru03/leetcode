'use strict';

const assert = require('assert');
const _ = require('lodash');

const { myPow } = require('./');

describe('#myPow', () => {
  const tests = [
    {
      x: 2,
      n: 10,
      result: 1024,
    },
    {
      x: 2,
      n: -2,
      result: 0.25,
    },
    {
      x: 2.0,
      n: -2147483648,
      result: 0,
    },
  ];

  _.forEach(tests, ({ x, n, result }) => {
    it(`${x}, ${n} -> ${result}`, () => {
      assert.deepStrictEqual(myPow(x, n), result);
    });
  });
});
