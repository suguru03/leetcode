'use strict';

const assert = require('assert');
const _ = require('lodash');

const { mergeKLists } = require('./');
const { makeLinkNodes } = require('../utils');

describe('#mergeKLists', () => {
  const tests = [
    {
      lists: [[1, 4, 5], [1, 3, 4], [2, 6]],
      result: [1, 1, 2, 3, 4, 4, 5, 6],
    },
    {
      lists: [[]],
      result: null,
    },
  ];

  _.forEach(tests, ({ lists, result }) => {
    it(`${lists} -> ${result}`, () => {
      assert.deepStrictEqual(mergeKLists(lists.map(list => makeLinkNodes(list))), makeLinkNodes(result));
    });
  });
});
