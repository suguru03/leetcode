'use strict';

const assert = require('assert');
const _ = require('lodash');
const { reverseBits } = require('./');

describe('#reverseBits', () => {

  const tests = [{
    n: 43261596,
    result: 964176192
  }, {
    n: 1,
    result: 2147483648
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(reverseBits(n), result);
    });
  });
});
