using System.Collections.Generic;
using NUnit.Framework;

namespace GenerateParentheses
{
    public class Test
    {
        private readonly Solution solution = new Solution();

        [Test]
        public void Test1()
        {
            Assert.AreEqual(solution.GenerateParenthesis(4), new List<string>
            {
                "(((())))", "()((()))", "((()))()", "(()(()))", "()()(())", "()(())()", "((())())", "(())()()",
                "((()()))", "()(()())", "(()())()", "(()()())", "()()()()", "(())(())"
            });
        }
    }
}
