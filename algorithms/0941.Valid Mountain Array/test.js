'use strict';

const assert = require('assert');

const { validMountainArray } = require('./');

describe('#validMountainArray', () => {
  const tests = [
    {
      A: [0, 1, 2, 4, 2, 1],
      result: true,
    },
    {
      A: [2, 1],
      result: false,
    },
    {
      A: [3, 5, 5],
      result: false,
    },
    {
      A: [1, 3, 2],
      result: true,
    },
    {
      A: [1, 2, 3],
      result: false,
    },
    {
      A: [3, 2, 1],
      result: false,
    },
    {
      A: [1, 1, 1, 1, 1, 1, 1, 2, 1],
      result: false,
    },
  ];

  for (const { A, result } of tests) {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(validMountainArray(A), result);
    });
  }
});
