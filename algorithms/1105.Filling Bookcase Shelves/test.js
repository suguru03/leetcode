'use strict';

const assert = require('assert');
const _ = require('lodash');
const { minHeightShelves } = require('./');

describe('#minHeightShelves', () => {
  const tests = [
    {
      books: [[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]],
      shelf_width: 4,
      result: 6,
    },
    {
      books: [[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]],
      shelf_width: 4,
      result: 2,
    },
  ];

  _.forEach(tests, ({ books, shelf_width, result }) => {
    it(`${books}, ${shelf_width} -> ${result}`, () => {
      assert.deepStrictEqual(minHeightShelves(books, shelf_width), result);
    });
  });
});
