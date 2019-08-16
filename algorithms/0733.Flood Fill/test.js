'use strict';

const assert = require('assert');
const _ = require('lodash');
const { floodFill } = require('./');

describe('#floodFill', () => {
  const tests = [
    {
      image: [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
      sr: 1,
      sc: 1,
      newColor: 2,
      result: [[2, 2, 2], [2, 2, 0], [2, 0, 1]],
    },
    {
      image: [[0, 0, 0], [0, 1, 1]],
      sr: 1,
      sc: 1,
      newColor: 1,
      result: [[0, 0, 0], [0, 1, 1]],
    },
  ];

  _.forEach(tests, ({ image, sr, sc, newColor, result }) => {
    it(`${image}, ${sr}, ${sc}, ${newColor} -> ${result}`, () => {
      assert.deepStrictEqual(floodFill(image, sr, sc, newColor), result);
    });
  });
});
