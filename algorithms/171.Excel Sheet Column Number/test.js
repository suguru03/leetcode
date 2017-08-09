'use strict';

// TODO
return;

const assert = require('assert');
const _ = require('lodash');
const { titleToNumber } = require('./');

describe('#titleToNumber', () => {

  const tests = [{
    s: 'A',
    result: 1
  }, {
    s: 'AB',
    result: 28
  }, {
    s: 'ABCDE',
    result: 494265
  }];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.strictEqual(titleToNumber(s), result);
    });
  });
});
