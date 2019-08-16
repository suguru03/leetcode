'use strict';

const assert = require('assert');
const _ = require('lodash');
const { rotateString } = require('./');

describe('#rotateString', () => {
  const tests = [
    {
      A: 'abcde',
      B: 'cdeab',
      result: true,
    },
    {
      A: 'abcde',
      B: 'abced',
      result: false,
    },
  ];

  _.forEach(tests, ({ A, B, result }) => {
    it(`${A}, ${B} -> ${result}`, () => {
      assert.deepStrictEqual(rotateString(A, B), result);
    });
  });
});
