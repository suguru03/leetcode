'use strict';

const assert = require('assert');
const _ = require('lodash');
const { largestMultipleOfThree } = require('./');

describe('#largestMultipleOfThree', () => {
  const tests = [
    {
      digits: [8, 1, 9],
      result: '981',
    },
    {
      digits: [8, 6, 7, 1, 0],
      result: '8760',
    },
  ];

  _.forEach(tests, ({ digits, result }) => {
    it(`${digits} -> ${result}`, () => {
      assert.deepStrictEqual(largestMultipleOfThree(digits), result);
    });
  });
});
