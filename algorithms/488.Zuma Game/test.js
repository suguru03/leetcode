'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findMinStep } = require('./');

describe('#findMinStep', () => {
  const tests = [
    {
      board: 'WRRBBW',
      hand: 'RB',
      result: -1,
    },
    {
      board: 'WWRRBBWW',
      hand: 'WRBRW',
      result: 2,
    },
    {
      board: 'G',
      hand: 'GGGGG',
      result: 2,
    },
    {
      board: 'RBYYBBRRB',
      hand: 'YRBGB',
      result: 3,
    },
    {
      board: 'BBBYYBB',
      hand: 'YRBGB',
      result: 1,
    },
    {
      board: 'BBYY',
      hand: 'YBG',
      result: 2,
    },
    {
      board: 'WWGWGW',
      hand: 'GWBWR',
      result: 3,
    },
  ];

  _.forEach(tests, ({ board, hand, result }) => {
    it(`board:${board} hand:${hand} -> ${result}`, () => {
      assert.strictEqual(findMinStep(board, hand), result);
    });
  });
});
