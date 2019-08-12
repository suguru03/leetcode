'use strict';

const assert = require('assert');
const _ = require('lodash');
const { dayOfYear } = require('./');

describe('#dayOfYear', () => {
  const tests = [
    {
      date: '2019-01-09',
      result: 9,
    },
    {
      date: '2019-02-10',
      result: 41,
    },
    {
      date: '2003-03-01',
      result: 60,
    },
    {
      date: '2004-03-01',
      result: 61,
    },
  ];

  _.forEach(tests, ({ date, result }) => {
    it(`${date} -> ${result}`, () => {
      assert.deepStrictEqual(dayOfYear(date), result);
    });
  });
});
