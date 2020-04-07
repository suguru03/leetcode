from typing import List, Dict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groupMap: Dict[str, List[str]] = {}
        for s in strs:
            counts = [0] * 26
            for c in s:
                counts[ord(c) - 97] += 1
            key = ','.join(map(str, counts))
            groupMap[key] = groupMap.get(key, []) + [s]
        return list(groupMap.values())
