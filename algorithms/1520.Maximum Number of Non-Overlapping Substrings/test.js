'use strict';

const assert = require('assert');
const _ = require('lodash');

const { maxNumOfSubstrings } = require('./');

describe('#maxNumOfSubstrings', () => {
  const tests = [
    {
      s: 'adefaddaccc',
      result: ['e', 'f', 'ccc'],
    },
    {
      s: 'abbaccd',
      result: ['d', 'bb', 'cc'],
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(maxNumOfSubstrings(s), result);
    });
  });
});
