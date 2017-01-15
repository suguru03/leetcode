'use strict';

const assert = require('assert');
const _ = require('lodash');
const { lengthOfLastWord } = require('./');

describe('#lengthOfLastWord', () => {

  const tests = [{
    s: 'Hello World',
    result: 5
  }, {
    s: 'Hello ',
    result: 5
  }, {
    s: 'Hello',
    result: 5
  }, {
    s: 'Hello a ab abc',
    result: 3
  }];

  _.forEach(tests, ({ s, result }) => {
    it(`${s} -> ${result}`, () => {
      assert.strictEqual(lengthOfLastWord(s), result);
    });
  });
});
