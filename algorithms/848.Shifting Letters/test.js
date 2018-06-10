'use strict';

const assert = require('assert');

const _ = require('lodash');

const { shiftingLetters } = require('./');

describe('#shiftingLetters', () => {
  const tests = [
    {
      S: 'abc',
      shifts: [3, 5, 9],
      result: 'rpl',
    },
    {
      S: 'z',
      shifts: [52],
      result: 'z',
    },
  ];

  _.forEach(tests, ({ S, shifts, result }) => {
    it(`S: ${S}, shifts: ${shifts} => ${result}`, () => {
      assert.deepStrictEqual(shiftingLetters(S, shifts), result);
    });
  });
});
