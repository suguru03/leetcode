'use strict';

const assert = require('assert');
const _ = require('lodash');
const myAtoi = require('./');

describe('#StringToInteger', () => {

  const tests = [{
    str: '',
    result: 0
  }, {
    str: '-3a1474836b47a',
    result: -3
  }, {
    str: ' 3.11474836b47a',
    result: 3
  }, {
    str: '  a b c 3.11474836b47a',
    result: 0
  }, {
    str: '+10.5',
    result: 10
  }];

  _.forEach(tests, ({ str, result }) => {
    it(`[${str}] -> [${result}]`, () => {
      assert.strictEqual(myAtoi(str), result);
    });
  });
});
