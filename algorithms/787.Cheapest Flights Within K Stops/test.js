'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findCheapestPrice } = require('./');

describe('#findCheapestPrice', () => {
  const tests = [
    {
      n: 3,
      flights: [[0, 1, 100], [1, 2, 100], [0, 2, 500]],
      src: 0,
      dst: 2,
      K: 1,
      result: 200,
    },
    {
      n: 3,
      flights: [[0, 1, 100], [1, 2, 100], [0, 2, 500]],
      src: 0,
      dst: 2,
      K: 0,
      result: 500,
    },
  ];

  _.forEach(tests, ({ n, flights, src, dst, K, result }) => {
    it(`${n}, ${flights}, ${src}, ${dst}, ${K} -> ${result}`, () => {
      assert.deepStrictEqual(
        findCheapestPrice(n, flights, src, dst, K),
        result,
      );
    });
  });
});
