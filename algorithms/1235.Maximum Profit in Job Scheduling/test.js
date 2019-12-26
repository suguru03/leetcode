'use strict';

const assert = require('assert');
const _ = require('lodash');
const { jobScheduling } = require('./');

describe('#jobScheduling', () => {
  const tests = [
    {
      startTime: [1, 2, 3, 3],
      endTime: [3, 4, 5, 6],
      profit: [50, 10, 40, 70],
      result: 120,
    },
    {
      startTime: [1, 2, 3, 4, 6],
      endTime: [3, 5, 10, 6, 9],
      profit: [20, 20, 100, 70, 60],
      result: 150,
    },
    {
      startTime: [1, 1, 1],
      endTime: [2, 3, 4],
      profit: [5, 6, 4],
      result: 6,
    },
  ];

  _.forEach(tests, ({ startTime, endTime, profit, result }) => {
    it(`${startTime}, ${endTime}, ${profit} -> ${result}`, () => {
      assert.deepStrictEqual(jobScheduling(startTime, endTime, profit), result);
    });
  });
});
