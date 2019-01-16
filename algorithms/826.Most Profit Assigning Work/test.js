'use strict';

const assert = require('assert');

const _ = require('lodash');

const { maxProfitAssignment } = require('./');

describe('#maxProfitAssignment', () => {
  const tests = [
    {
      difficulty: [2, 4, 6, 8, 10],
      profit: [10, 20, 30, 40, 50],
      worker: [4, 5, 6, 7],
      result: 100,
    },
    {
      difficulty: [13, 37, 58],
      profit: [4, 90, 96],
      worker: [34, 73, 45],
      result: 190,
    },
  ];

  _.forEach(tests, ({ difficulty, profit, worker, result }) => {
    it(`difficulty: ${difficulty}, profit: ${profit}, worker: ${worker} => ${result}`, () => {
      assert.deepStrictEqual(maxProfitAssignment(difficulty, profit, worker), result);
    });
  });
});
