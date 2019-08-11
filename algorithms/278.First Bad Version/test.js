'use strict';

const assert = require('assert');
const { solution } = require('./');

describe('#solution', () => {
  it('should work', () => {
    const isBadVersion = n => n > 10;
    assert.strictEqual(solution(isBadVersion)(20), 11);
  });
});
