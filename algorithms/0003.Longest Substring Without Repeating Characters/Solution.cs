using System;
using System.Collections.Generic;

namespace LongestSubstringWithoutRepeatingCharacters
{
    public class Solution
    {
        public int LengthOfLongestSubstring(string s)
        {
            var max = 0;
            var l = -1;
            var indexMap = new Dictionary<char, int>();
            for (var r = 0; r < s.Length; r++)
            {
                var c = s[r];
                if (indexMap.ContainsKey(c))
                {
                    l = Math.Max(l, indexMap[c]);
                }

                max = Math.Max(max, r - l);
                indexMap[c] = r;
            }

            return max;
        }
    }
}
