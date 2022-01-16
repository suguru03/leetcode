'use strict';

const assert = require('assert');

const { sortedSquares } = require('./');

describe('#sortedSquares', () => {
  const tests = [
    {
      A: [-4, -1, 0, 3, 10],
      result: [0, 1, 9, 16, 100],
    },
    {
      A: [-7, -3, 2, 3, 11],
      result: [4, 9, 9, 49, 121],
    },
  ];

  for (const { A, result } of tests) {
    it(`${A} -> ${result}`, () => {
      assert.deepStrictEqual(sortedSquares(A), result);
    });
  }
});
