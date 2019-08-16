'use strict';

const assert = require('assert');
const _ = require('lodash');
const { licenseKeyFormatting } = require('./');

describe('#licenseKeyFormatting', () => {
  const tests = [
    {
      S: '5F3Z-2e-9-w',
      K: 4,
      result: '5F3Z-2E9W',
    },
    {
      S: '2-5g-3-J',
      K: 2,
      result: '2-5G-3J',
    },
  ];

  _.forEach(tests, ({ S, K, result }) => {
    it(`${S}, ${K} -> ${result}`, () => {
      assert.deepStrictEqual(licenseKeyFormatting(S, K), result);
    });
  });
});
