'use strict';

const assert = require('assert');
const _ = require('lodash');
const { daysBetweenDates } = require('./');

describe('#daysBetweenDates', () => {
  const tests = [
    {
      date1: '2019-06-29',
      date2: '2019-06-30',
      result: 1,
    },
    {
      date1: '2020-01-15',
      date2: '2019-12-31',
      result: 15,
    },
    {
      date1: '2023-01-13',
      date2: '2044-02-11',
      result: 7699,
    },
  ];

  _.forEach(tests, ({ date1, date2, result }) => {
    it(`${date1}, ${date2} -> ${result}`, () => {
      assert.deepStrictEqual(daysBetweenDates(date1, date2), result);
    });
  });
});
