'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isRectangleOverlap } = require('./');

describe('#isRectangleOverlap', () => {
  const tests = [
    {
      rec1: [0, 0, 2, 2],
      rec2: [1, 1, 3, 3],
      result: true,
    },
    {
      rec1: [0, 0, 1, 1],
      rec2: [1, 0, 2, 1],
      result: false,
    },
    {
      rec1: [0, 0, 3, 3],
      rec2: [1, 1, 2, 2],
      result: true,
    },
    {
      rec1: [1, 1, 2, 2],
      rec2: [0, 0, 3, 3],
      result: true,
    },
  ];

  _.forEach(tests, ({ rec1, rec2, result }) => {
    it(`${rec1}, ${rec2} -> ${result}`, () => {
      assert.deepStrictEqual(isRectangleOverlap(rec1, rec2), result);
    });
  });
});
