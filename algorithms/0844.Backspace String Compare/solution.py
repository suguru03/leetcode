class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        si, ti, sb, tb = len(S) - 1, len(T) - 1, 0, 0
        while si >= 0 or ti >= 0:
            sc = S[si] if si >= 0 else ''
            tc = T[ti] if ti >= 0 else ''
            if sc == '#':
                si -= 1
                sb += 1
                continue
            if tc == '#':
                ti -= 1
                tb += 1
                continue
            if sb:
                si -= 1
                sb -= 1
                continue
            if tb:
                ti -= 1
                tb -= 1
                continue
            if sc != tc:
                return False
            si -= 1
            ti -= 1
        return True
