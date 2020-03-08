'use strict';

const assert = require('assert');
const _ = require('lodash');

const { isSubPath } = require('./');
const { makeTestLinkNodes, makeTestTreeNodes } = require('../util');

describe('#isSubPath', () => {
  const tests = [
    {
      head: [4, 2, 8],
      root: [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3],
      result: true,
    },
  ];
  makeTestLinkNodes(tests, 'head');
  makeTestTreeNodes(tests);

  _.forEach(tests, ({ head, _head, root, _root, result }) => {
    it(`${_head}, ${_root} -> ${result}`, () => {
      assert.deepStrictEqual(isSubPath(head, root), result);
    });
  });
});
