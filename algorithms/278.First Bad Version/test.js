'use strict';

const assert = require('assert');
const _ = require('lodash');
const { solution } = require('./');

describe('#solution', () => {
  it('should work', () => {
    const isBadVersion = function(n) {
      return n > 10;
    };
    assert.strictEqual(solution(isBadVersion)(20), 11);
  });
});
