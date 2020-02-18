'use strict';

const assert = require('assert');
const _ = require('lodash');
const { groupAnagrams } = require('./');

describe('#groupAnagrams', () => {
  const tests = [
    {
      strs: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
      result: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
    },
  ];

  _.forEach(tests, ({ strs, result }) => {
    it(`${strs} -> ${result}`, () => {
      assert.deepStrictEqual(groupAnagrams(strs), result);
    });
  });
});
