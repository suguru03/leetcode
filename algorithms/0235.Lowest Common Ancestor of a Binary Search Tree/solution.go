package main

/**
 * Definition for TreeNode.
 * type TreeNode struct {
 *     Val int
 *     Left *ListNode
 *     Right *ListNode
 * }
 */
func lowestCommonAncestor(node, p, q *TreeNode) *TreeNode {
	if node == nil {
		return nil
	}
	if node.Val > p.Val && node.Val > q.Val {
		return lowestCommonAncestor(node.Left, p, q)
	}
	if node.Val < p.Val && node.Val < q.Val {
		return lowestCommonAncestor(node.Right, p, q)
	}
	return node
}
