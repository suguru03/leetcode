'use strict';

const assert = require('assert');

const { cloneGraph, Node } = require('./');

describe('#cloneGraph', () => {
  const tests = [
    {
      node: [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
      ],
      result: [
        [2, 4],
        [1, 3],
        [2, 4],
        [1, 3],
      ],
    },
    {
      node: [[]],
      result: [[]],
    },
    {
      node: [],
      result: [],
    },
  ];

  for (const { node, result } of tests) {
    it(`${node} -> ${result}`, () => {
      assert.deepStrictEqual(cloneGraph(constructGraph(node)), constructGraph(result));
    });
  }

  function constructGraph(list) {
    const map = new Map(Array.from(list, (_, i) => [i + 1, new Node(i + 1, [])]));
    for (const [index, neighbors] of list.entries()) {
      const node = map.get(index + 1);
      assert.ok(node);
      for (const neighborVal of neighbors) {
        const neighbor = map.get(neighborVal);
        assert.ok(neighbor);
        node.neighbors.push(neighbor);
      }
    }

    return map.get(1) ?? null;
  }
});
