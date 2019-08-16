'use strict';

const assert = require('assert');

const _ = require('lodash');

const { numComponents } = require('./');
const { makeTestLinkNodes } = require('../util');

describe('#numComponents', () => {
  const tests = [
    {
      head: [0, 1, 2, 3],
      G: [0, 1, 3],
      result: 2,
    },
  ];
  makeTestLinkNodes(tests, 'head');

  _.forEach(tests, ({ head, _head, G, result }) => {
    it(`head: ${_head}, G: ${G} => ${result}`, () => {
      assert.deepStrictEqual(numComponents(head, G), result);
    });
  });
});
