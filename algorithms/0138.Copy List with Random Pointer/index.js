/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  const memo = new Map();
  const result = new Node();
  let node = result;
  while (head) {
    const next = getNode(head);
    next.val = head.val;
    next.random = getNode(head.random);
    [node.next, node, head] = [next, next, head.next];
  }
  return result.next;

  function getNode(node) {
    if (!node) {
      return null;
    }
    memo.set(node, memo.get(node) ?? new Node());
    return memo.get(node);
  }
}
