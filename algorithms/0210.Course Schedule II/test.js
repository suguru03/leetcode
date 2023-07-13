'use strict';

const assert = require('assert');
const _ = require('lodash');

const { findOrder } = require('./');

describe('#findOrder', () => {
  const tests = [
    {
      numCourses: 2,
      prerequisites: [[1, 0]],
      result: [0, 1],
    },
    {
      numCourses: 4,
      prerequisites: [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ],
      result: [0, 2, 1, 3],
    },
    {
      numCourses: 2,
      prerequisites: [
        [0, 1],
        [1, 0],
      ],
      result: [],
    },
    {
      numCourses: 3,
      prerequisites: [
        [1, 0],
        [0, 2],
        [2, 1],
      ],
      result: [],
    },
    {
      numCourses: 3,
      prerequisites: [
        [1, 0],
        [1, 2],
        [0, 1],
      ],
      result: [],
    },
  ];

  _.forEach(tests, ({ numCourses, prerequisites, result }) => {
    it(`${numCourses}, ${prerequisites} -> ${result}`, () => {
      assert.deepStrictEqual(findOrder(numCourses, prerequisites), result);
    });
  });
});
