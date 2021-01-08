'use strict';

const assert = require('assert');

const { maximumUnits } = require('./');

describe('#maximumUnits', () => {
  const tests = [
    {
      boxTypes: [[1, 3], [2, 2], [3, 1]],
      truckSize: 4,
      result: 8,
    },
    {
      boxTypes: [[5, 10], [2, 5], [4, 7], [3, 9]],
      truckSize: 10,
      result: 91,
    },
    {
      boxTypes: [[2, 1], [4, 4], [3, 1], [4, 1], [2, 4], [3, 4], [1, 3], [4, 3], [5, 3], [5, 3]],
      truckSize: 13,
      result: 48,
    },
  ];

  for (const { boxTypes, truckSize, result } of tests) {
    it(`${boxTypes}, ${truckSize} -> ${result}`, () => {
      assert.deepStrictEqual(maximumUnits(boxTypes, truckSize), result);
    });
  }
});
