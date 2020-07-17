'use strict';

const assert = require('assert');
const _ = require('lodash');

const { numSub } = require('./');

describe('#numSub', () => {
  const tests = [
    {
      s: '0110111',
      result: 9,
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(numSub(s), result);
    });
  });
});
