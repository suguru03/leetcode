'use strict';

const assert = require('assert');
const _ = require('lodash');
const { canWinNim } = require('./');

describe('#canWinNim', () => {

  const tests = [{
    n: 1,
    result: true
  }, {
    n: 2,
    result: true
  }, {
    n: 3,
    result: true
  }, {
    n: 4,
    result: false
  }, {
    n: 5,
    result: true
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(canWinNim(n), result);
    });
  });
});
