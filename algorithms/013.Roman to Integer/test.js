'use strict';

const assert = require('assert');
const _ = require('lodash');
const { romanToInt } = require('./');

describe('#RomanToInt', () => {

  const tests = [{
    s: 'DCXXI',
    result: 621
  }, {
    s: 'DCCCXC',
    result: 890
  }, {
    s: 'LXXVI',
    result: 76
  }, {
    s: 'LXXXVIII',
    result: 88
  }, {
    s: 'C',
    result: 100
  }, {
    s: 'MDCCC',
    result: 1800
  }, {
    s: 'XXXVIII',
    result: 38
  }, {
    s: 'XXXIX',
    result: 39
  }];

  _.forEach(tests, ({ s, result }) => {
    it(`[${s}] -> [${result}]`, () => {
      assert.strictEqual(romanToInt(s), result);
    });
  });
});
