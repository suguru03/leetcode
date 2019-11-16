'use strict';

const assert = require('assert');
const _ = require('lodash');
const { reconstructMatrix } = require('./');

describe('#reconstructMatrix', () => {
  const tests = [
    {
      upper: 2,
      lower: 1,
      colsum: [1, 1, 1],
      result: [[1, 1, 0], [0, 0, 1]],
    },
    {
      upper: 2,
      lower: 3,
      colsum: [2, 2, 1, 1],
      result: [],
    },
    {
      upper: 5,
      lower: 5,
      colsum: [2, 1, 2, 0, 1, 0, 1, 2, 0, 1],
      result: [[1, 1, 1, 0, 1, 0, 0, 1, 0, 0], [1, 0, 1, 0, 0, 0, 1, 1, 0, 1]],
    },
    {
      upper: 1,
      lower: 4,
      colsum: [2, 1, 2, 0, 0, 2],
      result: [],
    },
    {
      upper: 4,
      lower: 7,
      colsum: [2, 1, 2, 2, 1, 1, 1],
      result: [],
    },
  ];

  _.forEach(tests, ({ upper, lower, colsum, result }) => {
    it(`${upper}, ${lower}, ${colsum} -> ${result}`, () => {
      assert.deepStrictEqual(reconstructMatrix(upper, lower, colsum), result);
    });
  });
});
