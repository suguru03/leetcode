'use strict';

const assert = require('assert');
const _ = require('lodash');

const { kClosest } = require('./');

describe('#kClosest', () => {
  const tests = [
    {
      points: [[1, -3], [-2, 2]],
      K: 1,
      result: [[-2, 2]],
    },
    {
      points: [[3, 3], [5, -1], [-2, 4]],
      K: 2,
      result: [[-2, 4], [3, 3]],
    },
  ];

  _.forEach(tests, ({ points, K, result }) => {
    it(`${points}, ${K} -> ${result}`, () => {
      assert.deepStrictEqual(kClosest(points, K), result);
    });
  });
});
