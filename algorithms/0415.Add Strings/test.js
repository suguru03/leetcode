'use strict';

const assert = require('assert');
const _ = require('lodash');
const { addStrings } = require('./');

describe('#addStrings', () => {
  const tests = [
    {
      num1: '0',
      num2: '0',
      result: '0',
    },
    {
      num1: '9',
      num2: '99',
      result: '108',
    },
  ];

  _.forEach(tests, ({ num1, num2, result }) => {
    it(`num1: ${num1}, num2: ${num2} -> ${result}`, () => {
      assert.deepStrictEqual(addStrings(num1, num2), result);
    });
  });
});
