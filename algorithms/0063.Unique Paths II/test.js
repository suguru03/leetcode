'use strict';

const assert = require('assert');
const _ = require('lodash');
const { uniquePathsWithObstacles } = require('./');

describe('#uniquePathsWithObstacles', () => {
  const tests = [
    {
      obstacleGrid: [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
      result: 2,
    },
    {
      obstacleGrid: [[0, 0, 0], [1, 0, 1], [0, 0, 0]],
      result: 1,
    },
    {
      obstacleGrid: [[0, 1]],
      result: 0,
    },
    {
      obstacleGrid: [[1]],
      result: 0,
    },
  ];

  _.forEach(tests, ({ obstacleGrid, result }) => {
    it(`${obstacleGrid} -> ${result}`, () => {
      assert.deepStrictEqual(uniquePathsWithObstacles(obstacleGrid), result);
    });
  });
});
