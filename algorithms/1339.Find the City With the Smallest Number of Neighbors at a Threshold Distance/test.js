'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findTheCity } = require('./');

describe('#findTheCity', () => {
  const tests = [
    {
      n: 4,
      edges: [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]],
      distanceThreshold: 4,
      result: 3,
    },
    {
      n: 5,
      edges: [[0, 1, 2], [0, 4, 8], [1, 2, 3], [1, 4, 2], [2, 3, 1], [3, 4, 1]],
      distanceThreshold: 2,
      result: 0,
    },
    {
      n: 8,
      edges: [
        [3, 5, 9558],
        [1, 2, 1079],
        [1, 3, 8040],
        [0, 1, 9258],
        [4, 7, 7558],
        [5, 6, 8196],
        [3, 4, 7284],
        [1, 5, 6327],
        [0, 4, 5966],
        [3, 6, 8575],
        [2, 5, 8604],
        [1, 7, 7782],
        [4, 6, 2857],
        [3, 7, 2336],
        [0, 6, 6],
        [5, 7, 2870],
        [4, 5, 5055],
        [0, 7, 2904],
        [1, 6, 2458],
        [0, 5, 3399],
        [6, 7, 2202],
        [0, 2, 3996],
        [0, 3, 7495],
        [1, 4, 2262],
        [2, 6, 1390],
      ],
      distanceThreshold: 7937,
      result: 7,
    },
  ];

  _.forEach(tests, ({ n, edges, distanceThreshold, result }) => {
    it(`${n}, ${edges}, ${distanceThreshold} -> ${result}`, () => {
      assert.deepStrictEqual(findTheCity(n, edges, distanceThreshold), result);
    });
  });
});
