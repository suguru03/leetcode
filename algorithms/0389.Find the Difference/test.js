'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findTheDifference } = require('./');

describe('#findTheDifference', () => {
  const tests = [
    {
      s: 'abcd',
      t: 'abcde',
      result: 'e',
    },
  ];

  _.forEach(tests, ({ s, t, result }) => {
    it(`${s}, ${t} -> ${result}`, () => {
      assert.strictEqual(findTheDifference(s, t), result);
    });
  });
});
