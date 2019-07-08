'use strict';

const assert = require('assert');
const _ = require('lodash');
const { delNodes } = require('./');
const { makeTestTreeNodes, makeTreeNodes } = require('../util');

describe('#delNodes', () => {
  const tests = [
    {
      root: [1, 2, 3, 4, 5, 6, 7],
      to_delete: [3, 5],
      result: [[1, 2, null, 4], [6], [7]],
    },
  ];
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ root, _root, to_delete, result }) => {
    const _result = result;
    result = result.map(makeTreeNodes);
    it(`${_root}, ${to_delete} -> ${_result}`, () => {
      assert.deepStrictEqual(delNodes(root, to_delete), result);
    });
  });
});
