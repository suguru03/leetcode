'use strict';

const assert = require('assert');
const _ = require('lodash');
const { mincostTickets } = require('./');

describe('#mincostTickets', () => {
  const tests = [
    {
      days: [1, 4, 6, 7, 8, 20],
      costs: [2, 7, 15],
      result: 11,
    },
    {
      days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
      costs: [2, 7, 15],
      result: 17,
    },
  ];

  _.forEach(tests, ({ days, costs, result }) => {
    it(`${days}, ${costs} -> ${result}`, () => {
      assert.deepStrictEqual(mincostTickets(days, costs), result);
    });
  });
});
