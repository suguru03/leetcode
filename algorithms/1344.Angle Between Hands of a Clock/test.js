'use strict';

const assert = require('assert');
const _ = require('lodash');

const { angleClock } = require('./');

describe('#angleClock', () => {
  const tests = [
    {
      hour: 12,
      minutes: 30,
      result: 165,
    },
    {
      hour: 3,
      minutes: 30,
      result: 75,
    },
    {
      hour: 3,
      minutes: 15,
      result: 7.5,
    },
    {
      hour: 4,
      minutes: 50,
      result: 155,
    },
    {
      hour: 12,
      minutes: 0,
      result: 0,
    },
  ];

  _.forEach(tests, ({ hour, minutes, result }) => {
    it(`${hour}, ${minutes} -> ${result}`, () => {
      assert.deepStrictEqual(angleClock(hour, minutes), result);
    });
  });
});
