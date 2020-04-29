'use strict';

const assert = require('assert');
const _ = require('lodash');
const { removePalindromeSub } = require('./');

describe('#removePalindromeSub', () => {
  const tests = [
    {
      s: 'ababa',
      result: 1,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(removePalindromeSub(s), result);
    });
  });
});
