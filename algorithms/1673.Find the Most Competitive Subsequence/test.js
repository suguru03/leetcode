'use strict';

const assert = require('assert');

const { mostCompetitive } = require('./');

describe('#mostCompetitive', () => {
  const tests = [
    {
      nums: [3, 5, 2, 6],
      k: 2,
      result: [2, 6],
    },
    {
      nums: [2, 4, 3, 3, 5, 4, 9, 6],
      k: 4,
      result: [2, 3, 3, 4],
    },
    {
      nums: [71, 18, 52, 29, 55, 73, 24, 42, 66, 8, 80, 2],
      k: 3,
      result: [8, 80, 2],
    },
  ];

  for (const { nums, k, result } of tests) {
    it(`${nums}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(mostCompetitive(nums, k), result);
    });
  }
});
