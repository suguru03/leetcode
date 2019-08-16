'use strict';

const assert = require('assert');
const _ = require('lodash');
const { maxRepOpt1 } = require('./');

describe('#maxRepOpt1', () => {
  const tests = [
    {
      text: 'ababa',
      result: 3,
    },
    {
      text: 'aaabaaa',
      result: 6,
    },
    {
      text: 'aaabbaaa',
      result: 4,
    },
    {
      text: 'abbba',
      result: 3,
    },
    {
      text: 'abcdef',
      result: 1,
    },
    {
      text: 'babbaaabbbbbaa',
      result: 6,
    },
  ];

  _.forEach(tests, ({ text, result }) => {
    it(`${text} -> ${result}`, () => {
      assert.deepStrictEqual(maxRepOpt1(text), result);
    });
  });
});
