class Solution:
    def countElements(self, arr: List[int]) -> int:
        s = set(arr)
        return sum(n + 1 in s for n in arr)
