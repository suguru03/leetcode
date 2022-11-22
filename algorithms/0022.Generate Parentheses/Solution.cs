using System.Collections.Generic;
using System.Linq;

namespace GenerateParentheses
{
    public class Solution
    {
        public IList<string> GenerateParenthesis(int n)
        {
            return GenerateHashSet(n).ToList();
        }

        private readonly Dictionary<int, HashSet<string>> memo = new Dictionary<int, HashSet<string>>
        {
            { 1, new HashSet<string> { "()" } }
        };

        private HashSet<string> GenerateHashSet(int n)
        {
            if (memo.TryGetValue(n, out var cache))
            {
                return cache;
            }

            var prev = GenerateHashSet(n - 1);
            var next = new HashSet<string>();
            memo.Add(n, next);
            foreach (var str in prev)
            {
                next.Add($"({str})");
                next.Add($"(){str}");
                next.Add($"{str}()");
            }

            for (var i = 1; i <= n / 2; i++)
            {
                var p1 = GenerateHashSet(i);
                var p2 = GenerateHashSet(n - i);
                foreach (var s1 in p1)
                {
                    foreach (var s2 in p2)
                    {
                        next.Add($"{s1}{s2}");
                        next.Add($"{s2}{s1}");
                    }
                }
            }

            return next;
        }
    }
}
