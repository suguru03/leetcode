'use strict';

const assert = require('assert');

const { advantageCount } = require('./');

describe('#advantageCount', () => {
  const tests = [
    {
      A: [2, 7, 11, 15],
      B: [1, 10, 4, 11],
      result: [2, 11, 7, 15],
    },
    {
      A: [12, 24, 8, 32],
      B: [13, 25, 32, 11],
      result: [24, 32, 8, 12],
    },
  ];

  for (const { A, B, result } of tests) {
    it(`${A}, ${B} -> ${result}`, () => {
      assert.deepStrictEqual(advantageCount(A, B), result);
    });
  }
});
