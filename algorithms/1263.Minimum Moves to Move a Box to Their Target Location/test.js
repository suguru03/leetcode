'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minPushBox } = require('./');

describe('#minPushBox', () => {
  const tests = [
    {
      grid: [
        ['#', '#', '#', '#', '#', '#'],
        ['#', 'T', '#', '#', '#', '#'],
        ['#', '.', '.', 'B', '.', '#'],
        ['#', '.', '#', '#', '.', '#'],
        ['#', '.', '.', '.', 'S', '#'],
        ['#', '#', '#', '#', '#', '#'],
      ],
      result: 3,
    },
    {
      grid: [
        ['#', '#', '#', '#', '#', '#'],
        ['#', 'T', '.', '.', '#', '#'],
        ['#', '.', '#', 'B', '.', '#'],
        ['#', '.', '.', '.', '.', '#'],
        ['#', '.', '.', '.', 'S', '#'],
        ['#', '#', '#', '#', '#', '#'],
      ],
      result: 5,
    },
    {
      grid: [
        ['#', '#', '#', '#', '#', '#', '#'],
        ['#', 'S', '#', '.', 'B', 'T', '#'],
        ['#', '#', '#', '#', '#', '#', '#'],
      ],
      result: -1,
    },
    {
      grid: [
        ['#', '.', '.', '#', '#', '#', '#', '#'],
        ['#', '.', '.', 'T', '#', '.', '.', '#'],
        ['#', '.', '.', '.', '#', 'B', '.', '#'],
        ['#', '.', '.', '.', '.', '.', '.', '#'],
        ['#', '.', '.', '.', '#', '.', 'S', '#'],
        ['#', '.', '.', '#', '#', '#', '#', '#'],
      ],
      result: 7,
    },
    {
      grid: [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '#', '#'],
        ['#', '.', '#', '#', '#', '#', '.', '#', '#', '#', '#', '.', '#', '#', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '#', 'T', '#', '.', '.', '#', '#', '#', '.'],
        ['#', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '#', '#', '#', '.'],
        ['#', '.', '.', '.', '.', '.', 'B', '.', '.', '.', '.', '.', '#', '#', '#', '.'],
        ['#', '.', '#', '#', '#', '#', '#', '#', '#', '#', '#', '.', '#', '#', '#', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '.', '.', '.', '.', '.', '.', '.', 'S', '.', '.', '.', '.', '.', '.', '.'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
      ],
      result: -1,
    },
    {
      grid: [
        ['#', '.', '.', '#', 'T', '#', '#', '#', '#'],
        ['#', '.', '.', '#', '.', '#', '.', '.', '#'],
        ['#', '.', '.', '#', '.', '#', 'B', '.', '#'],
        ['#', '.', '.', '.', '.', '.', '.', '.', '#'],
        ['#', '.', '.', '.', '.', '#', '.', 'S', '#'],
        ['#', '.', '.', '#', '.', '#', '#', '#', '#'],
      ],
      result: 8,
    },
  ];

  _.forEach(tests, ({ grid, result }) => {
    it(`${grid} -> ${result}`, () => {
      assert.deepStrictEqual(minPushBox(grid), result);
    });
  });
});
