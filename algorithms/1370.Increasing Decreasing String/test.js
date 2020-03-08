'use strict';

const assert = require('assert');
const _ = require('lodash');
const { sortString } = require('./');

describe('#sortString', () => {
  const tests = [
    {
      s: 'aaaabbbbcccc',
      result: 'abccbaabccba',
    },
    {
      s: 'rat',
      result: 'art',
    },
    {
      s: 'leetcode',
      result: 'cdelotee',
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(sortString(s), result);
    });
  });
});
