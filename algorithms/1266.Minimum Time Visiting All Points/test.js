'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minTimeToVisitAllPoints } = require('./');

describe('#minTimeToVisitAllPoints', () => {
  const tests = [
    {
      points: [[1, 1], [3, 4], [-1, 0]],
      result: 7,
    },
    {
      points: [[3, 2], [-2, 2]],
      result: 5,
    },
  ];

  _.forEach(tests, ({ points, result }) => {
    it(`${points} -> ${result}`, () => {
      assert.deepStrictEqual(minTimeToVisitAllPoints(points), result);
    });
  });
});
