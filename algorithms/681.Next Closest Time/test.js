'use strict';

const assert = require('assert');
const _ = require('lodash');
const { nextClosestTime } = require('./');

describe('#nextClosestTime', () => {
  const tests = [
    {
      time: '19:34',
      result: '19:39',
    },
    {
      time: '23:59',
      result: '22:22',
    },
    {
      time: '00:00',
      result: '00:00',
    },
  ];

  _.forEach(tests, ({ time, result }) => {
    it(`${time} -> ${result}`, () => {
      assert.strictEqual(nextClosestTime(time), result);
    });
  });
});
