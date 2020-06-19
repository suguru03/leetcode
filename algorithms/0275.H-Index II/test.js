'use strict';

const assert = require('assert');
const _ = require('lodash');

const { hIndex } = require('./');

describe('#hIndex', () => {
  const tests = [
    {
      citations: [0, 1, 3, 5, 6],
      result: 3,
    },
    {
      citations: [],
      result: 0,
    },
    {
      citations: [0],
      result: 0,
    },
    {
      citations: [3, 4, 4, 4, 8, 10],
      result: 4,
    },
    {
      citations: [3, 3, 5, 8, 25],
      result: 3,
    },
    {
      citations: [100],
      result: 1,
    },
    {
      citations: [10, 10],
      result: 2,
    },
  ];

  _.forEach(tests, ({ citations, result }) => {
    it(`${citations} -> ${result}`, () => {
      assert.deepStrictEqual(hIndex(citations), result);
    });
  });
});
