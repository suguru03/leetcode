using System.Collections.Generic;

namespace ValidParentheses
{
    public class Solution
    {
        private static Dictionary<char, char> ParentheseMap = new Dictionary<char, char>
        {
            { '(', ')' },
            { '{', '}' },
            { '[', ']' },
        };

        public bool IsValid(string s)
        {
            var stack = new Stack<char>();
            foreach (var c in s)
            {
                if (ParentheseMap.TryGetValue(c, out var pair))
                {
                    stack.Push(pair);
                    continue;
                }

                if (stack.Count == 0 || stack.Pop() != c)
                {
                    return false;
                }
            }

            return stack.Count == 0;
        }
    }
}
