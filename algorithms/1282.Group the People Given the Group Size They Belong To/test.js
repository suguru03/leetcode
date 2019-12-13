'use strict';

const assert = require('assert');
const _ = require('lodash');
const { groupThePeople } = require('./');

describe('#groupThePeople', () => {
  const tests = [
    {
      groupSizes: [3, 3, 3, 3, 3, 1, 3],
      result: [[0, 1, 2], [3, 4, 6], [5]],
    },
    {
      groupSizes: [2, 1, 3, 3, 3, 2],
      result: [[0, 5], [1], [2, 3, 4]],
    },
  ];

  _.forEach(tests, ({ groupSizes, result }) => {
    it(`${groupSizes} -> ${result}`, () => {
      assert.deepStrictEqual(sort(groupThePeople(groupSizes)), sort(result));
    });
  });

  function sort(result) {
    result.sort((a1, a2) => a1[0] - a2[0]);
  }
});
