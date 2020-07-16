'use strict';

const assert = require('assert');
const _ = require('lodash');

const { reverseWords } = require('./');

describe('#reverseWords', () => {
  const tests = [
    {
      s: 'the sky is blue',
      result: 'blue is sky the',
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(reverseWords(s), result);
    });
  });
});
