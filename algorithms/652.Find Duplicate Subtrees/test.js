'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findDuplicateSubtrees } = require('./');

describe('#findDuplicateSubtrees', () => {

  const tests = [{
  }];

  _.forEach(tests, ({ n, result }) => {
    it(`${n} -> ${result}`, () => {
      assert.strictEqual(findDuplicateSubtrees(n), result);
    });
  });
});

//[2,1,1]
//[1,2,3,4,null,2,4,null,null,4]
//[2,2,2,3,null,3,null]
//[0,0,0,0,null,null,0,null,null,null,0]
//[0,null,0,null,0,null,0,null,0,null,0,null,0,null,0]
//[0,0,null,0,null,0,null,0,null,0,null,0,null,0]
