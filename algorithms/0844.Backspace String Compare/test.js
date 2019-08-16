'use strict';

const assert = require('assert');

const _ = require('lodash');

const { backspaceCompare } = require('./');

describe('#backspaceCompare', () => {
  const tests = [
    {
      S: 'ab#c',
      T: 'ad#c',
      result: true,
    },
    {
      S: 'ab##',
      T: 'c#d#',
      result: true,
    },
  ];

  _.forEach(tests, ({ S, T, result }) => {
    it(`S: ${S}, T: ${T} => ${result}`, () => {
      assert.deepStrictEqual(backspaceCompare(S, T), result);
    });
  });
});
