'use strict';

const assert = require('assert');
const _ = require('lodash');

const { isSubsequence } = require('./');

describe('#isSubsequence', () => {
  const tests = [
    {
      s: 'abc',
      t: 'ahbgdc',
      result: true,
    },
    {
      s: 'axc',
      t: 'ahbgdc',
      result: false,
    },
  ];

  _.forEach(tests, ({ s, t, result }) => {
    it(`${s}, ${t} -> ${result}`, () => {
      assert.deepStrictEqual(isSubsequence(s, t), result);
    });
  });
});
