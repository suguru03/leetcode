'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findOcurrences } = require('./');

describe('#findOcurrences', () => {
  const tests = [
    {
      text: 'alice is a good girl she is a good student',
      first: 'a',
      second: 'good',
      result: ['girl', 'student'],
    },
    {
      text: 'we will we will rock you',
      first: 'we',
      second: 'will',
      result: ['we', 'rock'],
    },
  ];

  _.forEach(tests, ({ text, first, second, result }) => {
    it(`${text}, ${first}, ${second} -> ${result}`, () => {
      assert.deepStrictEqual(findOcurrences(text, first, second), result);
    });
  });
});
