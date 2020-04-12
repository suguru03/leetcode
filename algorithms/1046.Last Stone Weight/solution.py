from heapq import heappush, heappop, heapify

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heap = [-stone for stone in stones]
        heapify(heap)
        while len(heap) > 1 and heap[0] != 0:
            heappush(heap, heappop(heap) - heappop(heap))
        return -heap[0]
