'use strict';

const assert = require('assert');
const _ = require('lodash');
const { tictactoe } = require('./');

describe('#tictactoe', () => {
  const tests = [
    {
      moves: [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]],
      result: 'A',
    },
    {
      moves: [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]],
      result: 'B',
    },
    {
      moves: [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]],
      result: 'Draw',
    },
    {
      moves: [[0, 0], [1, 1]],
      result: 'Pending',
    },
    {
      moves: [[2, 2], [0, 2], [1, 0], [0, 1], [2, 0], [0, 0]],
      result: 'B',
    },
  ];

  _.forEach(tests, ({ moves, result }) => {
    it(`${moves} -> ${result}`, () => {
      assert.deepStrictEqual(tictactoe(moves), result);
    });
  });
});
