'use strict';

const assert = require('assert');
const _ = require('lodash');
const { repeatedStringMatch } = require('./');

describe('#repeatedStringMatch', () => {
  const tests = [
    {
      A: 'abcd',
      B: 'cdabcdab',
      result: 3,
    },
    {
      A: 'abcd',
      B: 'cdab',
      result: 2,
    },
    {
      A: 'abba',
      B: 'aa',
      result: 2,
    },
    {
      A: 'aaaaaaaaaaaaaaaaaaaaaab',
      B: 'ba',
      result: 2,
    },
  ];

  _.forEach(tests, ({ A, B, result }) => {
    it(`${A}, ${B} -> ${result}`, () => {
      assert.deepStrictEqual(repeatedStringMatch(A, B), result);
    });
  });
});
