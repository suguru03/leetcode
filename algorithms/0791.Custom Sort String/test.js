'use strict';

const assert = require('assert');
const _ = require('lodash');
const { customSortString } = require('./');

describe('#customSortString', () => {
  const tests = [
    {
      S: 'cba',
      T: 'abcd',
      result: 'cbad',
    },
    {
      S: 'kqep',
      T: 'pekeq',
      result: 'kqeep',
    },
  ];

  _.forEach(tests, ({ S, T, result }) => {
    it(`${S}, ${T} -> ${result}`, () => {
      assert.deepStrictEqual(customSortString(S, T), result);
    });
  });
});
