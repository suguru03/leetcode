using NUnit.Framework;

namespace ClimbingStairs
{
    public class Test
    {
        private readonly Solution solution = new Solution();

        [Test]
        public void Test1()
        {
            Assert.AreEqual(solution.ClimbStairs(2), 2);
        }

        [Test]
        public void Test2()
        {
            Assert.AreEqual(solution.ClimbStairs(3), 3);
        }
    }
}
