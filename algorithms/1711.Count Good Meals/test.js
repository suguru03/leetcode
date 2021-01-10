'use strict';

const assert = require('assert');

const { countPairs } = require('./');

describe('#countPairs', () => {
  const tests = [
    {
      deliciousness: [1, 3, 5, 7, 9],
      result: 4,
    },
    {
      deliciousness: [1, 1, 1, 3, 3, 3, 7],
      result: 15,
    },
  ];

  for (const { deliciousness, result } of tests) {
    it(`${deliciousness} -> ${result}`, () => {
      assert.deepStrictEqual(countPairs(deliciousness), result);
    });
  }
});
