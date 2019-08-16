'use strict';

const assert = require('assert');
const _ = require('lodash');
const { prisonAfterNDays } = require('./');

describe('#prisonAfterNDays', () => {
  const tests = [
    {
      cells: [0, 1, 0, 1, 1, 0, 0, 1],
      N: 7,
      result: [0, 0, 1, 1, 0, 0, 0, 0],
    },
    {
      cells: [1, 0, 0, 1, 0, 1, 1, 0],
      N: 8,
      result: [0, 0, 0, 1, 1, 0, 0, 0],
    },
    {
      cells: [1, 0, 0, 1, 0, 1, 1, 0],
      N: 15,
      result: [0, 0, 0, 1, 1, 0, 0, 0],
    },
    {
      cells: [1, 0, 0, 1, 0, 1, 1, 0],
      N: 16,
      result: [0, 1, 0, 0, 0, 0, 1, 0],
    },
    {
      cells: [1, 0, 0, 1, 0, 0, 1, 0],
      N: 1000000000,
      result: [0, 0, 1, 1, 1, 1, 1, 0],
    },
    {
      cells: [1, 0, 0, 1, 0, 0, 1, 0],
      N: 30,
      result: [0, 1, 0, 1, 0, 0, 1, 0],
    },
    {
      cells: [1, 0, 1, 1, 0, 0, 1, 0],
      N: 536,
      result: [0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      cells: [1, 0, 0, 1, 0, 0, 0, 1],
      N: 826,
      result: [0, 1, 1, 0, 1, 1, 1, 0],
    },
  ];

  _.forEach(tests, ({ cells, N, result }) => {
    it(`${cells}, ${N} -> ${result}`, () => {
      assert.deepStrictEqual(prisonAfterNDays(cells, N), result);
    });
  });
});
