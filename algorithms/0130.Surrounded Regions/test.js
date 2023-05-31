'use strict';

const assert = require('assert');
const _ = require('lodash');

const { solve } = require('./');

describe('#solve', () => {
  const tests = [
    {
      board: [
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
      result: [
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
    },
    {
      board: [
        ['X', 'X', 'X', 'X'],
        ['O', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
      result: [
        ['X', 'X', 'X', 'X'],
        ['O', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
    },
    {
      board: [],
      result: [],
    },
    {
      board: [
        ['O', 'X', 'O'],
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
      ],
      result: [
        ['O', 'X', 'O'],
        ['X', 'X', 'X'],
        ['O', 'X', 'O'],
      ],
    },
    {
      board: [
        ['O', 'O', 'O', 'O', 'X', 'X'],
        ['O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'X', 'O', 'X', 'O', 'O'],
        ['O', 'X', 'O', 'O', 'X', 'O'],
        ['O', 'X', 'O', 'X', 'O', 'O'],
        ['O', 'X', 'O', 'O', 'O', 'O'],
      ],
      result: [
        ['O', 'O', 'O', 'O', 'X', 'X'],
        ['O', 'O', 'O', 'O', 'O', 'O'],
        ['O', 'X', 'O', 'X', 'O', 'O'],
        ['O', 'X', 'O', 'O', 'X', 'O'],
        ['O', 'X', 'O', 'X', 'O', 'O'],
        ['O', 'X', 'O', 'O', 'O', 'O'],
      ],
    },
  ];

  _.forEach(tests, ({ board, result }) => {
    it(`${board} -> ${result}`, () => {
      solve(board);
      assert.deepStrictEqual(board, result);
    });
  });
});
