'use strict';

const assert = require('assert');
const _ = require('lodash');
const { checkStraightLine } = require('./');

describe('#checkStraightLine', () => {
  const tests = [
    {
      coordinates: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]],
      result: true,
    },
    {
      coordinates: [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]],
      result: false,
    },
    {
      coordinates: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [4, 5]],
      result: true,
    },
  ];

  _.forEach(tests, ({ coordinates, result }) => {
    it(`${coordinates} -> ${result}`, () => {
      assert.deepStrictEqual(checkStraightLine(coordinates), result);
    });
  });
});
