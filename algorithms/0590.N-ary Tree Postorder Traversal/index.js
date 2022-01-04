/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
function postorder(root) {
  const result = [];
  dfs(root);
  return result;

  function dfs(node) {
    if (!node) {
      return;
    }
    for (const child of node.children) {
      dfs(child);
    }
    result.push(node.val);
  }
}
