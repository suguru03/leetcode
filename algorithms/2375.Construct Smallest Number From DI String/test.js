'use strict';

const assert = require('assert');
const _ = require('lodash');

const { smallestNumber } = require('./');

describe('#smallestNumber', () => {
  const tests = [
    {
      pattern: 'IIIDIDDD',
      result: '123549876',
    },
    {
      pattern: 'DDD',
      result: '4321',
    },
    {
      pattern: 'D',
      result: '21',
    },
    {
      pattern: 'I',
      result: '12',
    },
  ];

  _.forEach(tests, ({ pattern, result }) => {
    it(`[${pattern}] -> ${result}`, () => {
      assert.strictEqual(smallestNumber(pattern), result);
    });
  });
});
