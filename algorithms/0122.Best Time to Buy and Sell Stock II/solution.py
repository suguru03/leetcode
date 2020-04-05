from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit: int = 0
        for i in range(1, len(prices)):
            profit += max(0, prices[i] - prices[i - 1])
        return profit

