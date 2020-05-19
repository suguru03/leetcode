'use strict';

const assert = require('assert');
const _ = require('lodash');

const { checkInclusion } = require('./');

describe('#checkInclusion', () => {
  const tests = [
    {
      s1: 'ab',
      s2: 'eidbaooo',
      result: true,
    },
  ];

  _.forEach(tests, ({ s1, s2, result }) => {
    it(`${s1}, ${s2} -> ${result}`, () => {
      assert.deepStrictEqual(checkInclusion(s1, s2), result);
    });
  });
});
