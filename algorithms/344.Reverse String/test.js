'use strict';

const assert = require('assert');
const _ = require('lodash');
const { reverseString } = require('./');

describe('#reverseString', () => {
  const tests = [
    {
      s: 'hello',
      result: 'olleh',
    },
    {
      s: 'hello!',
      result: '!olleh',
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.strictEqual(reverseString(s), result);
    });
  });
});
