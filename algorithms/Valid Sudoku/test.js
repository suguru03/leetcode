'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isValidSudoku } = require('./');

describe('#isValidSudoku', () => {

  const tests = [{
    board: [
      '.87654321',
      '2........',
      '3........',
      '4........',
      '5........',
      '6........',
      '7........',
      '8........',
      '9........'
    ],
    result: true
  }, {
    board: [
      '53..7....',
      '6..195...',
      '.98....6.',
      '8...6...3',
      '4..8.3..1',
      '7...2...6',
      '.6....28.',
      '...419..5',
      '....8..79'
    ],
    result: true
  }, {
    board: [
      '53..7....',
      '6..195...',
      '.98....6.',
      '8...6...3',
      '4..8.3..1',
      '7...2...6',
      '.6....28.',
      '...419..5',
      '....8..72'
    ],
    result: false
  }, {
    board: [
      '..3....8.',
      '14....97.',
      '...9.842.',
      '31....65.',
      '...753...',
      '5.9......',
      '2..5.1.49',
      '8.1.473..',
      '7...69...'
    ],
    result: true
  }];

  _.forEach(tests, ({ board, result }) => {
    it(`[${board}] -> ${result}`, () => {
      assert.strictEqual(isValidSudoku(board), result);
    });
  });
});
