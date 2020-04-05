from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        j: int = 0
        for i, num in enumerate(nums):
            if num == 0:
                continue
            nums[i], nums[j] = nums[j], num
            j += 1
