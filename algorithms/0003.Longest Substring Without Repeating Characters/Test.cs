using NUnit.Framework;

namespace LongestSubstringWithoutRepeatingCharacters
{
    public class Test
    {
        private readonly Solution solution = new Solution();

        [Test]
        public void Test1()
        {
            Assert.AreEqual(solution.LengthOfLongestSubstring("abcabcbb"), 3);
        }

        [Test]
        public void Test2()
        {
            Assert.AreEqual(solution.LengthOfLongestSubstring("abba"), 2);
        }
    }
}
