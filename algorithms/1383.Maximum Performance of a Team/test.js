'use strict';

const assert = require('assert');
const _ = require('lodash');

const { maxPerformance } = require('./');

describe('#maxPerformance', () => {
  const tests = [
    {
      n: 6,
      speed: [2, 10, 3, 1, 5, 8],
      efficiency: [5, 4, 3, 9, 7, 2],
      k: 2,
      result: 60,
    },
    {
      n: 6,
      speed: [2, 10, 3, 1, 5, 8],
      efficiency: [5, 4, 3, 9, 7, 2],
      k: 3,
      result: 68,
    },
    {
      n: 6,
      speed: [2, 10, 3, 1, 5, 8],
      efficiency: [5, 4, 3, 9, 7, 2],
      k: 4,
      result: 72,
    },
  ];

  _.forEach(tests, ({ n, speed, efficiency, k, result }) => {
    it(`${n}, ${k} -> ${result}`, () => {
      assert.deepStrictEqual(maxPerformance(n, speed, efficiency, k), result);
    });
  });
});
