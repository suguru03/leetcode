'use strict';

const assert = require('assert');

const { findMinArrowShots } = require('./');

describe('#findMinArrowShots', () => {
  const tests = [
    {
      points: [
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
      ],
      result: 2,
    },
    {
      points: [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ],
      result: 4,
    },
    {
      points: [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
      ],
      result: 2,
    },
  ];

  for (const { points, result } of tests) {
    it(`${points} -> ${result}`, () => {
      assert.deepStrictEqual(findMinArrowShots(points), result);
    });
  }
});
