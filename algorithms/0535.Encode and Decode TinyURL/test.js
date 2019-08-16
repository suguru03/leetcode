'use strict';

const assert = require('assert');
const _ = require('lodash');
const { encode, decode } = require('./');

describe('#EncodeAndDecodeTinyURL', () => {
  it('should decode and encode', () => {
    const url = 'https://leetcode.com/problems/design-tinyurl';
    assert.strictEqual(decode(encode(url)), url);
  });
});
