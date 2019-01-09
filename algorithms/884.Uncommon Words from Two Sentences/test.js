'use strict';

const assert = require('assert');
const _ = require('lodash');
const { uncommonFromSentences } = require('./');

describe('#uncommonFromSentences', () => {
  const tests = [
    {
      A: 'this apple is sweet',
      B: 'this apple is sour',
      result: ['sweet', 'sour'],
    },
    {
      A: 'apple apple',
      B: 'banana',
      result: ['banana'],
    },
    {
      A: 's z z z s',
      B: 's z ejt',
      result: ['ejt'],
    },
  ];

  _.forEach(tests, ({ A, B, result }) => {
    it(`${A}, ${B} -> ${result}`, () => {
      assert.deepStrictEqual(sort(uncommonFromSentences(A, B)), sort(result));
    });
  });

  function sort(arr) {
    return arr.sort((a, b) => a.localeCompare(b));
  }
});
