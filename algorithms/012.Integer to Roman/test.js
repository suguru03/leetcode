'use strict';

const assert = require('assert');
const _ = require('lodash');
const { intToRoman } = require('./');

describe('#intToRoman', () => {

  const tests = [{
    num: 1,
    result: 'I'
  }, {
    num: 8,
    result: 'VIII'
  }, {
    num: 9,
    result: 'IX'
  }, {
    num: 10,
    result: 'X'
  }, {
    num: 12,
    result: 'XII'
  }, {
    num: 621,
    result: 'DCXXI'
  }, {
    num: 1414,
    result: 'MCDXIV'
  }];

  _.forEach(tests, ({ num, result }) => {
    it(`${num} -> ${result}`, () => {
      assert.strictEqual(intToRoman(num), result);
    });
  });
});
