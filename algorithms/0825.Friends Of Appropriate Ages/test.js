'use strict';

const assert = require('assert');

const _ = require('lodash');

const { numFriendRequests } = require('./');

describe('#numFriendRequests', () => {
  const tests = [
    {
      ages: [16, 16],
      result: 2,
    },
    {
      ages: [16, 17, 18],
      result: 2,
    },
    {
      ages: [20, 30, 100, 110, 120],
      result: 3,
    },
  ];

  _.forEach(tests, ({ ages, result }) => {
    it(`ages: ${ages} => ${result}`, () => {
      assert.deepStrictEqual(numFriendRequests(ages), result);
    });
  });
});
