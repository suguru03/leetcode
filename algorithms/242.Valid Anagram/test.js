'use strict';

const assert = require('assert');
const _ = require('lodash');
const { isAnagram } = require('./');

describe('#isAnagram', () => {
  const tests = [
    {
      s: 'anagram',
      t: 'nagaram',
      result: true,
    },
    {
      s: 'rat',
      t: 'car',
      result: false,
    },
  ];

  _.forEach(tests, ({ s, t, result }) => {
    it(`${s}, ${t} -> ${result}`, () => {
      assert.strictEqual(isAnagram(s, t), result);
    });
  });
});
