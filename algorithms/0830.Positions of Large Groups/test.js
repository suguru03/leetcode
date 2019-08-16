'use strict';

const assert = require('assert');

const _ = require('lodash');

const { largeGroupPositions } = require('./');

describe('#largeGroupPositions', () => {
  const tests = [
    {
      S: 'abbxxxxzzy',
      result: [[3, 6]],
    },
    {
      S: 'abc',
      result: [],
    },
    {
      S: 'abcdddeeeeaabbbcd',
      result: [[3, 5], [6, 9], [12, 14]],
    },
    {
      S: 'aaa',
      result: [[0, 2]],
    },
  ];

  _.forEach(tests, ({ S, result }) => {
    it(`S: ${S} => ${result}`, () => {
      assert.deepStrictEqual(largeGroupPositions(S), result);
    });
  });
});
