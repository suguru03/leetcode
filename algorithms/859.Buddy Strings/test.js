'use strict';

const assert = require('assert');
const _ = require('lodash');
const { buddyStrings } = require('./');

describe('#buddyStrings', () => {
  const tests = [
    {
      A: 'ab',
      B: 'ba',
      result: true,
    },
    {
      A: 'ab',
      B: 'ab',
      result: false,
    },
    {
      A: 'aa',
      B: 'aa',
      result: true,
    },
    {
      A: 'aaaaaaabc',
      B: 'aaaaaaacb',
      result: true,
    },
    {
      A: '',
      B: 'aa',
      result: false,
    },
  ];

  _.forEach(tests, ({ A, B, result }) => {
    it(`${A}, ${B} -> ${result}`, () => {
      assert.deepStrictEqual(buddyStrings(A, B), result);
    });
  });
});
