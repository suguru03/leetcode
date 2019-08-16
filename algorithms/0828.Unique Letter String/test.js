'use strict';

const assert = require('assert');
const _ = require('lodash');
const { uniqueLetterString } = require('./');

describe('#uniqueLetterString', () => {
  const tests = [
    {
      S: 'ABC',
      result: 10,
    },
    {
      S: 'ABA',
      result: 8,
    },
  ];

  _.forEach(tests, ({ S, result }) => {
    it(`${S} -> ${result}`, () => {
      assert.deepStrictEqual(uniqueLetterString(S), result);
    });
  });
});
