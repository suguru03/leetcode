'use strict';

const assert = require('assert');

const { numFactoredBinaryTrees } = require('./');

describe('#numFactoredBinaryTrees', () => {
  const tests = [
    {
      arr: [2, 4],
      result: 3,
    },
    {
      arr: [2, 4, 5, 10],
      result: 7,
    },
  ];

  for (const { arr, result } of tests) {
    it(`${arr} -> ${result}`, () => {
      assert.deepStrictEqual(numFactoredBinaryTrees(arr), result);
    });
  }
});
