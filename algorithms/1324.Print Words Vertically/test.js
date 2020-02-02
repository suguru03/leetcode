'use strict';

const assert = require('assert');
const _ = require('lodash');
const { printVertically } = require('./');

describe('#printVertically', () => {
  const tests = [
    {
      s: 'HOW ARE YOU',
      result: ['HAY', 'ORO', 'WEU'],
    },
  ];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.deepStrictEqual(printVertically(s), result);
    });
  });
});
