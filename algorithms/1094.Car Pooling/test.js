'use strict';

const assert = require('assert');

const { carPooling } = require('./');

describe('#carPooling', () => {
  const tests = [
    {
      trips: [
        [2, 1, 5],
        [3, 3, 7],
      ],
      capacity: 4,
      result: false,
    },
    {
      trips: [
        [2, 1, 5],
        [3, 3, 7],
      ],
      capacity: 5,
      result: true,
    },
    {
      trips: [
        [3, 2, 7],
        [3, 7, 9],
        [8, 3, 9],
      ],
      capacity: 11,
      result: true,
    },
    {
      trips: [
        [10, 5, 7],
        [10, 3, 4],
        [7, 1, 8],
        [6, 3, 4],
      ],
      capacity: 24,
      result: true,
    },
  ];

  for (const { trips, capacity, result } of tests) {
    it(`${trips}, ${capacity} -> ${result}`, () => {
      assert.deepStrictEqual(carPooling(trips, capacity), result);
    });
  }
});
