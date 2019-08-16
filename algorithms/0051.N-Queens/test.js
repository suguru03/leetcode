'use strict';

const assert = require('assert');
const _ = require('lodash');
const { solveNQueens } = require('./');

describe('#solveNQueens', () => {
  const tests = [
    {
      n: 1,
      result: [['Q']],
    },
    {
      n: 4,
      result: [['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']],
    },
    {
      n: 5,
      result: [
        ['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
        ['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
        ['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
        ['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
        ['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
        ['..Q..', '....Q', '.Q...', '...Q.', 'Q....'],
        ['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
        ['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
        ['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
        ['....Q', '..Q..', 'Q....', '...Q.', '.Q...'],
      ],
    },
    {
      n: 6,
      result: [
        ['.Q....', '...Q..', '.....Q', 'Q.....', '..Q...', '....Q.'],
        ['..Q...', '.....Q', '.Q....', '....Q.', 'Q.....', '...Q..'],
        ['...Q..', 'Q.....', '....Q.', '.Q....', '.....Q', '..Q...'],
        ['....Q.', '..Q...', 'Q.....', '.....Q', '...Q..', '.Q....'],
      ],
    },
  ];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.deepStrictEqual(sort(solveNQueens(n)), sort(result));
    });
  });
});

function sort(arr) {
  return arr.sort((a1, a2) => {
    for (let i = 0; i < a1.length; i++) {
      const s1 = a1[i];
      const s2 = a2[i];
      const res = s1.localeCompare(s2);
      if (res !== 0) {
        return res;
      }
    }
    return 0;
  });
}
