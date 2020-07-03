'use strict';

const assert = require('assert');
const _ = require('lodash');

const { calculate } = require('./');

describe('#calculate', () => {
  const tests = [
    {
      s: '3+2*2',
      result: 7,
    },
    {
      s: ' 3+5 / 2 ',
      result: 5,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(calculate(s), result);
    });
  });
});
