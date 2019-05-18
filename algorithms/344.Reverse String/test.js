'use strict';

const assert = require('assert');
const _ = require('lodash');
const { reverseString } = require('./');

describe('#reverseString', () => {
  const tests = [
    {
      s: ['h', 'e', 'l', 'l', 'o'],
      result: ['o', 'l', 'l', 'e', 'h'],
    },
    {
      s: ['H', 'a', 'n', 'n', 'a', 'h'],
      result: ['h', 'a', 'n', 'n', 'a', 'H'],
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      reverseString(s);
      assert.deepStrictEqual(s, result);
    });
  });
});
