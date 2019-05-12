'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isRobotBounded } = require('./');

describe('#isRobotBounded', () => {
  const tests = [
    {
      instructions: 'GGLLGG',
      result: true,
    },
    {
      instructions: 'GG',
      result: false,
    },
    {
      instructions: 'GL',
      result: true,
    },
    {
      instructions: 'GGRLL',
      result: true,
    },
    {
      instructions: 'LRRRRLLLRL',
      result: true,
    },
    {
      instructions: 'RRGRRGLLLRLGGLGLLGRLRLGLRLRRGLGGLLRRRLRLRLLGRGLGRRRGRLG',
      result: false,
    },
  ];

  _.forEach(tests, ({ instructions, result }) => {
    it(`${instructions} -> ${result}`, () => {
      assert.deepStrictEqual(isRobotBounded(instructions), result);
    });
  });
});
