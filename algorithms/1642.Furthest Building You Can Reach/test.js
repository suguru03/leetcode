'use strict';

const assert = require('assert');

const { furthestBuilding } = require('./');

describe('#furthestBuilding', () => {
  const tests = [
    {
      heights: [4, 2, 7, 6, 9, 14, 12],
      bricks: 5,
      ladders: 1,
      result: 4,
    },
    {
      heights: [4, 12, 2, 7, 3, 18, 20, 3, 19],
      bricks: 10,
      ladders: 2,
      result: 7,
    },
    {
      heights: [14, 3, 19, 3],
      bricks: 17,
      ladders: 0,
      result: 3,
    },
    {
      heights: [1, 5, 1, 2, 3, 4, 10000],
      bricks: 4,
      ladders: 1,
      result: 5,
    },
  ];

  for (const { heights, bricks, ladders, result } of tests) {
    it(`${heights}, ${bricks}, ${ladders} -> ${result}`, () => {
      assert.deepStrictEqual(furthestBuilding(heights, bricks, ladders), result);
    });
  }
});
