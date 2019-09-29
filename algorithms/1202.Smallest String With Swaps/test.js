'use strict';

const assert = require('assert');
const _ = require('lodash');
const { smallestStringWithSwaps } = require('./');

describe('#smallestStringWithSwaps', () => {
  const tests = [
    {
      s: 'dcab',
      pairs: [[0, 3], [1, 2]],
      result: 'bacd',
    },
    {
      s: 'dcab',
      pairs: [[0, 3], [1, 2], [0, 2]],
      result: 'abcd',
    },
    {
      s: 'cba',
      pairs: [[0, 1], [1, 2]],
      result: 'abc',
    },
  ];

  _.forEach(tests, ({ s, pairs, result }) => {
    it(`${s}, ${pairs} -> ${result}`, () => {
      assert.deepStrictEqual(smallestStringWithSwaps(s, pairs), result);
    });
  });
});
