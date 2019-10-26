'use strict';

const assert = require('assert');
const _ = require('lodash');
const { queensAttacktheKing } = require('./');

describe('#queensAttacktheKing', () => {
  const tests = [
    {
      queens: [[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]],
      king: [0, 0],
      result: [[0, 1], [1, 0], [3, 3]],
    },
  ];

  _.forEach(tests, ({ queens, king, result }) => {
    it(`${queens}, ${king} -> ${result}`, () => {
      assert.deepStrictEqual(queensAttacktheKing(queens, king).sort((a1, a2) => a1[0] - a2[0]), result);
    });
  });
});
