class Solution:
    def minDeletionSize(self, A: List[str]) -> int:
        return sum(any(a > b for a, b in zip(col, col[1:])) for col in zip(*A))
