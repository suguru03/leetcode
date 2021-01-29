/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function verticalTraversal(root) {
  const cells = [];
  const queue = [new Cell(0, 0, root)];
  let left = 0;
  let right = 0;
  while (queue.length) {
    const cell = queue.shift();
    const { node } = cell;
    if (!node) {
      continue;
    }
    left = Math.min(left, cell.x);
    right = Math.max(right, cell.x);
    cells.push(cell);
    queue.push(new Cell(cell.x - 1, cell.y + 1, node.left), new Cell(cell.x + 1, cell.y + 1, node.right));
  }
  return _.chain(cells)
    .sort((c1, c2) => c1.x - c2.x || c1.y - c2.y || c1.node.val - c2.node.val)
    .groupBy((cell) => cell.x - left)
    .values()
    .map((cells) => cells.map((cell) => cell.node.val))
    .value();
}

class Cell {
  constructor(x, y, node) {
    this.x = x;
    this.y = y;
    this.node = node;
  }
}
