'use strict';

const assert = require('assert');
const _ = require('lodash');
const { canFinish } = require('./');

describe('#canFinish', () => {
  const tests = [
    {
      numCourses: 2,
      prerequisites: [[1, 0]],
      result: true,
    },
    {
      numCourses: 2,
      prerequisites: [[1, 0], [0, 1]],
      result: false,
    },
    {
      numCourses: 2,
      prerequisites: [],
      result: true,
    },
  ];

  _.forEach(tests, ({ numCourses, prerequisites, result }) => {
    it(`${numCourses}, ${prerequisites} -> ${result}`, () => {
      assert.deepStrictEqual(canFinish(numCourses, prerequisites), result);
    });
  });
});
