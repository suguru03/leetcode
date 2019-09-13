'use strict';

const assert = require('assert');
const _ = require('lodash');
const { dayOfTheWeek } = require('./');

describe('#dayOfTheWeek', () => {
  const tests = [
    {
      day: 31,
      month: 8,
      year: 2019,
      result: 'Saturday',
    },
  ];

  _.forEach(tests, ({ day, month, year, result }) => {
    it(`${day}, ${month}, ${year} -> ${result}`, () => {
      assert.deepStrictEqual(dayOfTheWeek(day, month, year), result);
    });
  });
});
