'use strict';

const assert = require('assert');
const _ = require('lodash');
const { oddCells } = require('./');

describe('#oddCells', () => {
  const tests = [
    {
      n: 2,
      m: 3,
      indices: [[0, 1], [1, 1]],
      result: 6,
    },
    {
      n: 2,
      m: 2,
      indices: [[1, 1], [0, 0]],
      result: 0,
    },
  ];

  _.forEach(tests, ({ n, m, indices, result }) => {
    it(`${n}, ${m}, ${indices} -> ${result}`, () => {
      assert.deepStrictEqual(oddCells(n, m, indices), result);
    });
  });
});
