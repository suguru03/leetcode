'use strict';

const assert = require('assert');
const _ = require('lodash');

const { StreamChecker } = require('./');

describe('#StreamChecker', () => {
  it('should work', () => {
    const streamChecker = new StreamChecker(['cd', 'f', 'kl']); // init the dictionary.
    const letters = [
      ['a', false],
      ['b', false],
      ['c', false],
      ['d', true],
      ['e', false],
      ['f', true],
      ['g', false],
      ['h', false],
      ['i', false],
      ['j', false],
      ['k', false],
      ['l', true],
    ];
    for (const [letter, expected] of letters) {
      assert.strictEqual(streamChecker.query(letter), expected, `${letter} -> ${expected}`);
    }
  });
});
