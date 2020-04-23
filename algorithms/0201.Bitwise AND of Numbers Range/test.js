'use strict';

const assert = require('assert');
const _ = require('lodash');
const { rangeBitwiseAnd } = require('./');

describe('#rangeBitwiseAnd', () => {
  const tests = [
    {
      m: 5,
      n: 7,
      result: 4,
    },
    {
      m: 0,
      n: 1,
      result: 0,
    },
    {
      m: 5,
      n: 5,
      result: 5,
    },
    {
      m: 10,
      n: 11,
      result: 10,
    },
  ];

  _.forEach(tests, ({ m, n, result }) => {
    it(`${m}, ${n} -> ${result}`, () => {
      assert.deepStrictEqual(rangeBitwiseAnd(m, n), result);
    });
  });
});
