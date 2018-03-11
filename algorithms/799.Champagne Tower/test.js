'use strict';

const assert = require('assert');
const _ = require('lodash');
const { champagneTower } = require('./');

describe('#champagneTower', () => {
  const tests = [
    {
      poured: 1,
      query_glass: 1,
      query_row: 1,
      result: 0,
    },
    {
      poured: 2,
      query_glass: 1,
      query_row: 1,
      result: 0.5,
    },
    {
      poured: 9,
      query_glass: 0,
      query_row: 3,
      result: 0.25,
    },
  ];

  _.forEach(tests, ({ poured, query_row, query_glass, result }) => {
    it(`poured: [${poured}], query_row: ${query_row} query_glass: ${query_glass} => [${result}]`, () => {
      assert.deepEqual(champagneTower(poured, query_row, query_glass), result);
    });
  });
});
