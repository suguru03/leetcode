'use strict';

const assert = require('assert');
const _ = require('lodash');
const reverse = require('./');

describe('#ReverseInteger', () => {
  const tests = [
    {
      x: 123,
      result: 321,
    },
    {
      x: -123,
      result: -321,
    },
    {
      x: 10,
      result: 1,
    },
    {
      x: 0,
      result: 0,
    },
    {
      x: 1200,
      result: 21,
    },
    {
      x: 2147483647,
      result: 0,
    },
    {
      x: -2147483648,
      result: 0,
    },
    {
      x: 24129431,
      result: 13492142,
    },
    {
      x: 1563847412,
      result: 0,
    },
  ];

  _.forEach(tests, ({ x, result }) => {
    it(`[${x}] -> [${result}]`, () => {
      assert.strictEqual(reverse(x), result);
    });
  });
});
