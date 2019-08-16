'use strict';

const assert = require('assert');
const _ = require('lodash');
const { numIslands } = require('./');

describe('#numIslands', () => {
  const tests = [
    {
      grid: [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ],
      result: 1,
    },
    {
      grid: [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
      ],
      result: 3,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(numIslands(grid), result);
    });
  });
});
