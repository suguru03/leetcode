using System.Collections.Generic;
using NUnit.Framework;

namespace CourseSchedule
{
    public class Test
    {
        private readonly Solution solution = new Solution();

        [Test]
        public void Test1()
        {
            Assert.AreEqual(solution.CanFinish(2, new[] { new[] { 1, 0 } }), true);
        }

        [Test]
        public void Test2()
        {
            var solution = new Solution();
            Assert.AreEqual(solution.CanFinish(2, new[] { new[] { 1, 0 }, new[] { 0, 1 } }), false);
        }

        [Test]
        public void Test3()
        {
            Assert.AreEqual(solution.CanFinish(3, new[] { new[] { 1, 0 }, new[] { 1, 2 } }), true);
        }
    }
}
