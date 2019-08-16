'use strict';

const assert = require('assert');

const _ = require('lodash');

const { shortestToChar } = require('./');

describe('#shortestToChar', () => {
  const tests = [
    {
      S: 'loveleetcode',
      C: 'e',
      result: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0],
    },
  ];

  _.forEach(tests, ({ S, C, result }) => {
    it(`S: ${S}, C: ${C} => ${result}`, () => {
      assert.deepStrictEqual(shortestToChar(S, C), result);
    });
  });
});
