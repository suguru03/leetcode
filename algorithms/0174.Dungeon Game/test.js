'use strict';

const assert = require('assert');
const _ = require('lodash');
const { calculateMinimumHP } = require('./');

describe('#calculateMinimumHP', () => {
  const tests = [
    {
      dungeon: [[-2, -3, 3], [-5, -10, 1], [10, 30, -5]],
      result: 7,
    },
    {
      dungeon: [[2], [1]],
      result: 1,
    },
    {
      dungeon: [[1, -3, 3], [0, -2, 0], [-3, -3, -3]],
      result: 3,
    },
  ];

  _.forEach(tests, ({ dungeon, result }) => {
    it(`${dungeon} -> ${result}`, () => {
      assert.deepStrictEqual(calculateMinimumHP(dungeon), result);
    });
  });
});
