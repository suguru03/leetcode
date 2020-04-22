'use strict';

const assert = require('assert');
const _ = require('lodash');

const { leftMostColumnWithOne } = require('./');

describe('#leftMostColumnWithOne', () => {
  const tests = [
    {
      mat: [[0, 0], [1, 1]],
      result: 0,
    },
    {
      mat: [[0, 0], [0, 1]],
      result: 1,
    },
    {
      mat: [[0, 0], [0, 0]],
      result: -1,
    },
    {
      mat: [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 1]],
      result: 1,
    },
    {
      mat: [[0, 0, 1], [0, 1, 1], [0, 0, 0]],
      result: 1,
    },
  ];

  class BinaryMatrix {
    constructor(mat) {
      this.mat = mat;
    }

    get(x, y) {
      return this.mat[x][y];
    }

    dimensions() {
      return [this.mat.length, this.mat[0].length];
    }
  }

  _.forEach(tests, ({ mat, result }) => {
    it(`${mat} -> ${result}`, () => {
      assert.deepStrictEqual(leftMostColumnWithOne(new BinaryMatrix(mat)), result);
    });
  });
});
