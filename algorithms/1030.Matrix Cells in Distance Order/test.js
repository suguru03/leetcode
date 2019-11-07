'use strict';

const assert = require('assert');
const _ = require('lodash');
const { allCellsDistOrder } = require('./');

describe('#allCellsDistOrder', () => {
  const tests = [
    {
      R: 1,
      C: 2,
      r0: 0,
      c0: 0,
      result: [[0, 0], [0, 1]],
    },
    {
      R: 2,
      C: 2,
      r0: 0,
      c0: 1,
      result: [[0, 1], [0, 0], [1, 1], [1, 0]],
    },
  ];

  _.forEach(tests, ({ R, C, r0, c0, result }) => {
    it(`${R}, ${C}, ${r0}, ${c0} -> ${result}`, () => {
      assert.deepStrictEqual(allCellsDistOrder(R, C, r0, c0), result);
    });
  });
});
