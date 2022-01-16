'use strict';

const assert = require('assert');

const { maxDistToClosest } = require('./');

describe('#maxDistToClosest', () => {
  const tests = [
    {
      seats: [1, 0, 0, 0, 1, 0, 1],
      result: 2,
    },
    {
      seats: [1, 0, 0, 0],
      result: 3,
    },
    {
      seats: [0, 1],
      result: 1,
    },
  ];

  for (const { seats, result } of tests) {
    it(`${seats} -> ${result}`, () => {
      assert.deepStrictEqual(maxDistToClosest(seats), result);
    });
  }
});
