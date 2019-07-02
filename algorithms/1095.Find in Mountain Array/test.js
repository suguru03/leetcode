'use strict';

const assert = require('assert');
const _ = require('lodash');
const { findInMountainArray } = require('./');

class MountainArray {
  constructor(arr) {
    this.arr = arr;
    this.count = 0;
  }
  get(i) {
    this.count++;
    return this.arr[i];
  }
  length() {
    this.count++;
    return this.arr.length;
  }
}

describe('#findInMountainArray', () => {
  const tests = [
    {
      array: [1, 2, 3, 4, 5, 3, 1],
      target: 3,
      result: 2,
    },
    {
      array: [1, 2, 3, 4, 5, 3, 1],
      target: 2,
      result: 1,
    },
    {
      array: [1, 3, 4, 5, 4, 3, 2, 1],
      target: 2,
      result: 6,
    },
    {
      array: [0, 1, 2, 4, 2, 1],
      target: 3,
      result: -1,
    },
  ];

  _.forEach(tests, ({ array, target, result }) => {
    it(`${array} ${target} -> ${result}`, () => {
      assert.deepStrictEqual(findInMountainArray(target, new MountainArray(array)), result);
    });
  });
});
