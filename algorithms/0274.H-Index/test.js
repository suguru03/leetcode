'use strict';

const assert = require('assert');
const _ = require('lodash');

const { hIndex } = require('./');

describe('#hIndex', () => {
  const tests = [
    {
      citations: [3, 0, 6, 1, 5],
      result: 3,
    },
    {
      citations: [9, 8],
      result: 2,
    },
  ];

  _.forEach(tests, ({ citations, result }) => {
    it(`${citations} -> ${result}`, () => {
      assert.deepStrictEqual(hIndex(citations), result);
    });
  });
});
