'use strict';

const assert = require('assert');
const _ = require('lodash');

const { exist } = require('./');

describe('#exist', () => {
  const tests = [
    {
      board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      word: 'ABCCED',
      result: true,
    },
    {
      board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      word: 'SEE',
      result: true,
    },
    {
      board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
      word: 'ABCB',
      result: false,
    },
    {
      board: [['C', 'A', 'A'], ['A', 'A', 'A'], ['B', 'C', 'D']],
      word: 'AAB',
      result: true,
    },
  ];

  _.forEach(tests, ({ board, word, result }) => {
    it(`${board}, ${word} -> ${result}`, () => {
      assert.deepStrictEqual(exist(board, word), result);
    });
  });
});
