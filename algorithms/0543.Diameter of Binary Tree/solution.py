from typing import Tuple

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        return self.dfs(root)[0]

    def dfs(self, node: TreeNode) -> Tuple[int, int]:
        if not node:
            return (0, 0)
        diameterL, depthL = self.dfs(node.left)
        diameterR, depthR = self.dfs(node.right)
        return (max(diameterL, diameterR, depthL + depthR), max(depthL, depthR) + 1)
