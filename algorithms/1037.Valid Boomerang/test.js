'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isBoomerang } = require('./');

describe('#isBoomerang', () => {
  const tests = [
    {
      points: [[1, 1], [2, 3], [3, 2]],
      result: true,
    },
    {
      points: [[1, 1], [2, 2], [3, 3]],
      result: false,
    },
  ];

  _.forEach(tests, ({ points, result }) => {
    it(`${points} -> ${result}`, () => {
      assert.deepStrictEqual(isBoomerang(points), result);
    });
  });
});
