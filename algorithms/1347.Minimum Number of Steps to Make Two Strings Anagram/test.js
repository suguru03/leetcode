'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minSteps } = require('./');

describe('#minSteps', () => {
  const tests = [
    {
      s: 'bab',
      t: 'aba',
      result: 1,
    },
  ];

  _.forEach(tests, ({ s, t, result }) => {
    it(`${s}, ${t} -> ${result}`, () => {
      assert.deepStrictEqual(minSteps(s, t), result);
    });
  });
});
